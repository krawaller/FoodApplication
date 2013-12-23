define(["backbone", "jquery", "underscore", "scripts/views/appView", "scripts/views/createDishView", "scripts/collection/DishList", "scripts/views/showDishView", "scripts/collection/Ingredients"],
function(Backbone, $, _, AppView, CreateDishView, DishList, ShowDishView, Ingredients){
	return Backbone.View.extend({
		initialize: function(options){
			this.$el.hide();
			this.ingredients = options.ingredients;
		},
		renderall: function(dishes){
			console.log("master renderall");
			if(this.contentView){this.contentView.remove();}
			this.contentView = new AppView({el:this.$el.find("#Content"), collection:dishes, ingredients:this.ingredients});
			this.listenTo(this.contentView, "showDish", function(dishTitle){
				this.trigger("showDish", {dishTitle:dishTitle});
			});
			this.contentView.render();
			this.$el.show();
			return this;
		},
		renderone: function(dish){
			console.log("master renderone");
			if(this.contentView){this.contentView.remove();}
			this.contentView = new ShowDishView({el:this.$el.find("#Content"), model:dish, collection:this.collection, ingredients:this.ingredients});
			this.contentView.render();
			this.$el.show();
			return this;
		},
		rendercreate: function(){
			console.log("master rendercreate");
			if(this.contentView){this.contentView.remove();}
			this.contentView = new CreateDishView({el:this.$el.find("#Content"), collection:this.collection, ingredients:this.ingredients});
			this.listenTo(this.contentView, "newDishDone", function(){
				this.trigger("newDishDone");
			});
			this.contentView.render();
			this.$el.show();
			return this;
		}
	});	
});
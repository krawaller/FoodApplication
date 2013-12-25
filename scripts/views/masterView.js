define(["backbone", "jquery", "underscore", "scripts/views/appView", "scripts/views/createDishView", "scripts/collection/DishList", "scripts/views/showDishView", "scripts/collection/Ingredients", "jade!templates/main"],
function(Backbone, $, _, AppView, CreateDishView, DishList, ShowDishView, Ingredients, template){
	return Backbone.View.extend({
		initialize: function(options){
			this.$el.hide();
			this.ingredients = options.ingredients;
		}, //Rendering stuff to be shown on every page - like the documentation
		render: function(){
			if(this.contentView){this.contentView.remove();}
			this.$el.empty();
			this.$el.append(template);
			return this;
		}, //Rendering all the recipes
		renderall: function(dishes){
			console.log("master renderall");
			this.render();
			this.contentView = new AppView({el:this.$el.find("#Content"), collection:dishes, ingredients:this.ingredients});
			this.listenTo(this.contentView, "showDish", function(dishTitle){
				this.trigger("showDish", {dishTitle:dishTitle});
			});
			this.contentView.render();
			this.$el.show();
			return this;
		}, //Rendering only one recipe
		renderone: function(dish){
			console.log("master renderone");
			this.render();
			this.contentView = new ShowDishView({el:this.$el.find("#Content"), model:dish, collection:this.collection, ingredients:this.ingredients});
			this.contentView.render();
			this.$el.show();
			return this;
		}, //Rendering the create recipe page
		rendercreate: function(){
			console.log("master rendercreate");
			this.render();
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
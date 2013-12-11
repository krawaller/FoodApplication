define(["backbone", "jquery", "jade!templates/foodlist", "scripts/collection/FoodList"],function(Backbone, $, template, FoodList){
	return Backbone.View.extend({
		initialize: function(){
			console.log("Initializing appView");
		//	this.collection.on('all', this.render, this);
		//	this.foodlist = new FoodList();
		//	this.foodlist.fetch({
		//		success: function(){
		//			return;
		//		}
		//	});
		},
		template: template,
		events:{
			"click": "showdish"
		},
		render: function(){
			this.$el.empty();
			console.log(this.collection.models);
			this.$el.append(template({ foodlist: this.collection.models }));
			console.log("Appending appView Template");
			return this;
		},
		showdish: function(){
			
		}
	});
});
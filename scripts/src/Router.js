// This is my router. There are many like it, but this one is mine. My router is my best friend. It is my life.
define(["backbone", "jquery", "scripts/views/appView", "scripts/views/createDishView", "scripts/views/ingredientView", "scripts/collection/FoodList", "scripts/views/showDishView"], 
	function(Backbone, $, appView, createDishView, ingredientView, FoodList, showDishView){
	var AppRouter = Backbone.Router.extend({
		//Adding routes
		routes: {
			"": "index",
			"createdish": "createdish",
			"showdish/:id": "showdish"
		},
		//Adding functions to run when the router finds the correct url
		index: function(){
			console.log("Index");
			console.log(this.collection);
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					that.AppView = new appView({ el: "#hello", collection: that.collection});
					that.AppView.render();
				}
			});
		},
		showdish: function(dishName){
			console.log("showdish " + dishName);
			var dishname = dishName;
			this.collection.fetch({
				success: function(dishes){
					var dish = dishes.find(function(model){
						return model.get('title') == dishname;
					});
					that.ShowDishView = new showDishView({ el: "#hello", model:dish});
					that.ShowDishView.render();
				}
			});
		},
		createdish: function(){
			this.DishView = new createDishView({el: "#hello", collection: this.collection});
			this.DishView.render();
		},
		//Initialize
		initialize: function(){
			this.collection = new FoodList();
			Backbone.history.start();
		}
	});
	return AppRouter;
});
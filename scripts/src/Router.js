// This is my router. There are many like it, but this one is mine. My router is my best friend. It is my life.
define(["backbone", "jquery", "underscore", "scripts/views/appView", "scripts/views/createDishView", "scripts/views/ingredientView", "scripts/collection/FoodList", "scripts/views/showDishView"], 
	function(Backbone, $, _, AppView, CreateDishView, IngredientView, FoodList, ShowDishView){
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
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					that.appView = new AppView({ el: "#hello", collection: that.collection});
					that.appView.render();
				}
			});
		},
		showdish: function(dishName){
			console.log("showdish " + dishName);
			var dishname = dishName;
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					var dish = dishes.find(function(model){
						return model.get('title') == dishname;
					});
					this.showDishView = new ShowDishView({ el: "#hello", model:dish, collection: that.collection});
					this.showDishView.render();
				}
			});
		},
		createdish: function(){
			this.dishView = new CreateDishView({el: "#hello", collection: this.collection});
			this.listenTo(this.dishView, "newDishDone", function(){
				this.navigate("",{trigger:true});
			});
			this.dishView.render();
		},
		//Initialize
		initialize: function(){
			this.collection = new FoodList();
			Backbone.history.start();
		}
	});
	return AppRouter;
});
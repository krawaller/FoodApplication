// This is my router. There are many like it, but this one is mine. My router is my best friend. It is my life.
define(["backbone", "jquery", "scripts/views/appView", "scripts/views/dishView", "scripts/views/ingredientView", "scripts/collection/FoodList"], function(Backbone, $, appView, dishView, ingredientView, FoodList){
	var AppRouter = Backbone.Router.extend({
		//Adding routes
		routes: {
			"": "index",
	//		"createfoodlist": "createfoodlist",
			"editfoodlist/:id": "editfoodlist",
			"createdish": "createdish",
			"showdish/:id": "showdish"
		},
		//Adding functions to run when the router finds the correct url
		index: function(){
			console.log("Index");
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					that.AppView.render();
				}
			})
		},
	//	createfoodlist: function(){
	//		console.log("createfoodlist");
	//	},
		showdish: function(id){
			console.log("showdish");
		},
		editfoodlist: function(id){
			console.log("editfoodlist");
		},
		createdish: function(){
			this.DishView = new dishView({el: "#hello", collection: this.collection});
			this.DishView.render();
		},
		//Initialize
		initialize: function(){
			this.collection = new FoodList();
			this.AppView = new appView({ el: "#hello", collection: this.collection});
			Backbone.history.start();
		}
	});
	return AppRouter;
});
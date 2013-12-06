// This is my router. There are many like it, but this one is mine. My router is my best friend. It is my life.
define(["backbone", "jquery", "scripts/views/appView", "scripts/views/dishView", "scripts/collection/FoodList", "scripts/views/ingredientView"], function(Backbone, $, appView, dishView, FoodList, ingredientView){
	var AppRouter = Backbone.Router.extend({
		//Adding routes
		routes: {
			"": "index",
			"createfoodlist": "createfoodlist",
			"editfoodlist": "editfoodlist",
			"createdish": "createdish"
		},
		//Adding functions to run when the router finds the correct url
		index: function(){
			console.log("Index");
			var foodlist = new FoodList();
			foodlist.fetch({
				success: function(){
					var AppView = new appView({ el: "#hello"});
					AppView.render();
				}
			});
		},
		createfoodlist: function(){
			console.log("createfoodlist");
		},
		editfoodlist: function(){
			console.log("editfoodlist");
		},
		createdish: function(){
			var DishView = new dishView({ el: "#hello"});
			DishView.render();
			console.log(DishView.dish.ingredients);
			var IngredientView = new ingredientView({ collection: DishView.dish.ingredients });
			IngredientView.render();
		}
	});
	//initialize thingy
	var initialize = function(){
		//Creating a new router object
		var app_router = new AppRouter();

		Backbone.history.start();
	}
	return {
		initialize: initialize
	};
});
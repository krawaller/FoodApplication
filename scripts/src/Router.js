// This is my router. There are many like it, but this one is mine. My router is my best friend. It is my life.
define(["backbone", "jquery", "underscore", "scripts/views/appView", "scripts/views/createDishView", "scripts/views/ingredientView", "scripts/collection/DishList", "scripts/views/showDishView", "scripts/collection/Ingredients"], 
	function(Backbone, $, _, AppView, CreateDishView, IngredientView, DishList, ShowDishView, Ingredients){
	var AppRouter = Backbone.Router.extend({
		//Adding routes
		routes: {
			"": "index",
			"createdish": "createdish",
			"showdish/:id": "showdish"
		},
		//Adding functions to run when the router finds the correct url
		index: function(){
			if(this.appView)
			{
				this.appView.remove();
			}
			console.log("Index");
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					that.ingredients.fetch({
						success:function(ingredients){
							that.appView = new AppView({ el: "#hello", collection: that.collection, ingredients: ingredients});
							that.listenTo(that.appView, "showDish", function(dishTitle){
								that.navigate("showdish/" + dishTitle.dishTitle, {trigger:true});
							});
							that.appView.render();
							$("#hello").append(that.appView.el);
						}
					});
				}
			});
		},
		showdish: function(dishName){
			if(this.showDishview)
			{
				this.showDishView.remove();
			}
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					var dish = dishes.find(function(model){
						return model.get('title') == dishName;
					});
					that.showDishView = new ShowDishView({ el: "#hello", model:dish, collection: that.collection});
					that.showDishView.collection = that.ingredients;
					that.showDishView.render();
					$("#hello").append(that.showDishView.el);
				}
			});
		},
		createdish: function(){
			if(this.dishView)
			{
				this.dishView.remove();
			}
			var that = this;
			this.ingredients.fetch({
				success:function(ingredients){
					that.dishView = new CreateDishView({el: "#hello", collection: that.collection, ingredients:that.ingredients});
					that.listenTo(that.dishView, "newDishDone", function(){
						that.navigate("",{trigger:true});
					});
					that.dishView.render();
					$("#hello").append(that.dishView.el);
				}
			});
		},
		//Initialize
		initialize: function(){
			this.collection = new DishList();
			this.ingredients = new Ingredients();
			Backbone.history.start();
		}
	});
	return AppRouter;
});
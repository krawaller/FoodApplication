// This is my router. There are many like it, but this one is mine. My router is my best friend. It is my life.
define(["backbone", "jquery", "underscore", "scripts/collection/DishList", "scripts/collection/Ingredients", "scripts/views/masterView"], 
	function(Backbone, $, _, DishList, Ingredients, MasterView){
	var AppRouter = Backbone.Router.extend({
		//Adding routes
		routes: {
			"": "index",
			"createdish": "createdish",
			"showdish/:id": "showdish"
		},
		//Adding functions to run when the router finds the correct url
		index: function(){
		//	if(this.appView){this.appView.remove();}
			console.log("Index route");
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					that.ingredients.fetch({
						success:function(ingredients){
							$("#hello").append(that.masterView.renderall(dishes).el);
							//Probably don't need this stuff anymore - saving it just in case (I'm scared..)
	//						that.appView = new AppView({ el: "#hello", collection: that.collection, ingredients: ingredients});
	//						that.listenTo(that.appView, "showDish", function(dishTitle){
	//							that.navigate("showdish/" + dishTitle.dishTitle, {trigger:true});
	//						});
	//						that.appView.render();
	//						$("#hello").append(that.appView.el);
						}
					});
				}
			});
		},
		showdish: function(dishName){
			//Another thing i prolly wont use..
		//	if(this.showDishview){this.showDishView.remove(); console.log("wat");}
			var that = this;
			this.collection.fetch({
				success: function(dishes){
					var dish = dishes.find(function(model){
						return model.get('title') == dishName;
					});
					$("#hello").append(that.masterView.renderone(dish).el);
					//More commented stuff - don't touch it!
	//				that.showDishView = new ShowDishView({ el: "#hello", model:dish, collection:that.collection, ingredients:that.ingredients});
	//				that.showDishView.collection = that.ingredients;
	//				that.showDishView.render();
	//				$("#hello").append(that.showDishView.el);
				}
			});
		},
		createdish: function(){
			//Rawr
		//	if(this.dishView){this.dishView.remove();}
			var that = this;
			this.ingredients.fetch({
				success:function(ingredients){
					$("#hello").append(that.masterView.rendercreate().el);
					//My hands are typing words
	//				that.dishView = new CreateDishView({el:"#hello", collection:that.collection, ingredients:ingredients});
	//				that.listenTo(that.dishView, "newDishDone", function(){
	//					that.navigate("",{trigger:true});
	//				});
	//				that.dishView.render();
	//				$("#hello").append(that.dishView.el);
				}
			});
		},
		//Initializes the whole application - i like this function, it's a nice function (Donkey ~ Shrek -01)
		initialize: function(){
			this.collection = new DishList();
			this.ingredients = new Ingredients();
			this.masterView = new MasterView({el:"#hello", collection:this.collection, ingredients:this.ingredients});
			this.listenTo(this.masterView, "showDish", function(dishTitle){
				this.navigate("showdish/" + dishTitle.dishTitle, {trigger:true});
			});
			this.listenTo(this.masterView, "newDishDone", function(){
				this.navigate("", {trigger:true});
			});
			Backbone.history.start();
		}
	});
	return AppRouter;
});
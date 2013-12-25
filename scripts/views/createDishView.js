define(["backbone", "jquery", "underscore", "jade!templates/createDish", "scripts/models/Dish", "scripts/views/ingredientView", "scripts/collection/Ingredients", "scripts/models/Ingredient"], 
	function(Backbone, $, _, template, Dish, ingrediView, Ingredients, Ingredient){
	return Backbone.View.extend({
		template: template, //Methods for initializing and rendering the createDish view
		initialize: function(options) {
			this.dishIngredients = [];
			this.ingredients = options.ingredients;
		},
		render: function(){
			var title = this.$el.find("#title").val();
			this.$el.empty();
			this.$el.append(template({ingredients: this.dishIngredients, title: title}));
			this.$el.find("#addIngredient").focus();
			return this;
		}, //Events for this view
		events: {
			"keypress #addIngredient"	: "createOnEnter",
			"click .btn"				: "finishRecipe"
		}, //Method for adding ingredients by pressing enter
		createOnEnter: function(e){
			if(e.keyCode != 13) return;
			if(!this.$("#addIngredient").val()) return;
			console.log("Value of ingredient just added: " + $("#addIngredient").val());
			this.addingredient($("#addIngredient").val());
			this.$("#addIngredient").val('');
			this.render();
		}, //Method that adds the ingredient to the ingredient array
		addingredient: function(value){
			this.dishIngredients.push(value);
		}, //Finishes off the recipe and adds it and the ingredients to their collections
		finishRecipe: function(){
			if(!this.$("#title").val().trim()){
				console.log("Can't have a recipe without a title!");
				return;
			}
			
			for(var i = 0; i < this.collection.models.length; i++)
			{
				if(this.collection.models[i].get('title') == this.$("#title").val().trim())
				{
					console.log("exists!");
					return;
				}
			}
			var title = this.$("#title").val().trim();

			for(var i = 0; i < this.dishIngredients.length; i++)
			{
				this.ingredients.create({name:this.dishIngredients[i], dishTitle:title});
			}
			this.collection.create(new Dish({title: title}));
			this.trigger("newDishDone");
		}
	});
});
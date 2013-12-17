define(["backbone", "jquery", "underscore", "jade!templates/createDish", "scripts/models/Dish", "scripts/views/ingredientView", "scripts/collection/Ingredients", "scripts/models/Ingredient"], 
	function(Backbone, $, _, template, Dish, ingrediView, Ingredients, Ingredient){
	return Backbone.View.extend({
		template: template,
		initialize: function() {
			this.ingredients = new Ingredients();
			this.dishIngredients = [];
		},
		render: function(){
			var title = this.$el.find("#title").val();
			this.$el.empty();
			this.$el.append(template({ingredients: this.dishIngredients, title: title}));
			this.$el.find("#addIngredient").focus();
			return this;
		},
		events: {
			"keypress #addIngredient"	: "createOnEnter",
			"click .btn"				: "finishRecipe"
		},
		createOnEnter: function(e){
			if(e.keyCode != 13) return;
			if(!this.$("#addIngredient").val()) return;
			console.log("Value of ingredient just added: " + $("#addIngredient").val());
			this.addingredient($("#addIngredient").val());
			this.$("#addIngredient").val('');
			this.render();
		},
		addingredient: function(value){
			this.dishIngredients[this.dishIngredients.length] = value;
		},
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
			//document.location.href = window.location.toString().split("#")[0];
		}
	});
});
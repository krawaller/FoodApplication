define(["backbone", "jquery", "scripts/models/Ingredient"], function(Backbone, $, Ingredient){
	return Backbone.Model.extend({
		defaults: {
			title: "",
			ingredients: []
		},
		title: function(){ return this.get('title'); },
		ingredients: function(){ return this.get('ingredients'); },
		addIngredient: function(value) {
			console.log(value);
			this.ingredients[this.ingredients.length + 1] = value;
		},
		initialize: function(){
			this.ingredients = [];
		}
	});
});
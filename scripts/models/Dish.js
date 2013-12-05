define(["backbone", "jquery", "scripts/models/Ingredient", "scripts/collection/Ingredients"], function(Backbone, $, Ingredient, Ingredients){
	return Backbone.Model.extend({
		defaults: {
			title: ""
		},
		addIngredient: function(value) {
			this.ingredients.add(new Ingredient({name:value}));
		},
		initialize: function(){
			this.ingredients = new Ingredients();
		}
	});
});
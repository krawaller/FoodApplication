define(["backbone", "jquery", "scripts/models/Ingredient", "scripts/collection/Ingredients"], function(Backbone, $, Ingredient, Ingredients){
	return Backbone.Model.extend({
		defaults: {
			id: "",
			title: ""
		},
		addIngredient: function(value) {
			this.ingredients.add(new Ingredient({name:value, dishTitle:this.get('title')}));
		},
		initialize: function(){
		}
	});
});
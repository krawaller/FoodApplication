define(["backbone", "jquery", "scripts/models/Ingredient"], function(Backbone, $, Ingredient){
	return Backbone.Collection.extend({
		model: Ingredient,
		localStorage: new Backbone.LocalStorage("foodlist")
	});
});
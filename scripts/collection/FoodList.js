define(["backbone", "jquery", "scripts/models/Dish"], function(Backbone, $, Dish){
	return Backbone.Collection.extend({
		model: Dish,
		localStorage: new Backbone.LocalStorage("foodlist")
	});
});
define(["backbone", "jquery", "scripts/models/Ingredient"], function(Backbone, $, Ingredient){
	return Backbone.Collection.extend({
		title: function(){ return this.get('title'); },
		model: Ingredient//,
		//localStorage: new Backbone.LocalStorage(this.title + "-dish")
	});
});
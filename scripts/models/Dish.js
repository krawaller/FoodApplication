define(["backbone", "jquery", "scripts/models/Ingredient", "scripts/collection/Ingredients"], function(Backbone, $, Ingredient, Ingredients){
	return Backbone.Model.extend({
		defaults: {
			title: ""
		},
		initialize: function(){
		},
		title: function() { return this.get('title'); }
	});
});
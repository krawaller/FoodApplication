define(["backbone", "jquery", "jade!templates/createDish"], function(Backbone, $, template){
	return Backbone.Model.extend({
		defaults: {
			title: ""
		},
		template: template,
		initialize: function() {
			this.collection.on('all', this.render, this);
		},
		name: function() { return this.get('title'); }
	});
});
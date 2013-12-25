define(["backbone", "jquery", "jade!templates/createDish"], function(Backbone, $, template){
	return Backbone.Model.extend({
		defaults: {
			name: "",
			dishTitle: ""
		},
		template: template,
		initialize: function() {
		},
		name: function() { return this.get('name'); }
	});
});
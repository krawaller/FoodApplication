define(["backbone", "jquery", "jade!templates/createDish"], function(Backbone, $, template){
	return Backbone.Model.extend({
		defaults: {
			name: ""
		},
		template: template,
		initialize: function() {
			if(!this.get("name")){
				this.set({"name": this.defaults().name});
			}

		},
		name: function() { return this.get('name'); }
	});
});
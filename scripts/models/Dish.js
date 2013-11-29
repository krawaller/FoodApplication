define(['backbone', 'jquery'], function(Backbone, $){
	return Backbone.Model.extend({
		urlRoot: "/createdish",
		name: function() { 
			return this.get('name'); 
		}
	});
});
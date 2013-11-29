define(['backbone', 'jquery'], function(Backbone, $){
	return Backbone.Router.extend({
		routes:{
			"": "index",
			"createfoodlist": "createfoodlist",
			"createdish": "createdish" 
		},
		index: function(){

		},
		createfoodlist: function() {

		},
		createdish: function() {

		}
	});
});
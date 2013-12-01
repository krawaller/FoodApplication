define(["backbone", "jquery"], function(Backbone, $){
	var AppRouter = Backbone.Router.extend({
		routes: {
			"": "index",
			"createfoodlist": "createfoodlist",
			"editfoodlist": "editfoodlist",
			"createdish": "createdish"
		},
		index: function(){
			console.log("Index");
		},
		createfoodlist: function(){
			console.log("createfoodlist");
		},
		editfoodlist: function(){
			console.log("editfoodlist");
		},
		createdish: function(){
			console.log("createdish");
		}
	});
	var initialize = function(){
		var app_router = new AppRouter();

		Backbone.history.start();
	}
	return {
		initialize: initialize
	};
});
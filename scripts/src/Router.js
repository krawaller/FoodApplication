// This is my router. There are many like it, but this one is mine. My router is my best friend. It is my life.
define(["backbone", "jquery"], function(Backbone, $){
	var AppRouter = Backbone.Router.extend({
		//Adding routes
		routes: {
			"": "index",
			"createfoodlist": "createfoodlist",
			"editfoodlist": "editfoodlist",
			"createdish": "createdish"
		},
		//Adding functions to run when the router finds the correct url
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
	//initialize thingy
	var initialize = function(){
		//Creating a new router object
		var app_router = new AppRouter();

		Backbone.history.start();
	}
	return {
		initialize: initialize
	};
});
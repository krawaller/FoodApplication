define(['backbone', 'jquery', 'underscore', 'scripts/src/Router', 'scripts/views/appView'], function (Backbone, $, _, Router, appView) {
 var initialize = function(){
 	//Calls the routers initialize function
 	Router.initialize();
 	};
 return {
 	initialize: initialize
 };
});
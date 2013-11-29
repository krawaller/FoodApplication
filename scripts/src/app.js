define(['backbone', 'jquery', 'scripts/views/appView'], function (Backbone, $, AppView) {
 return {
		start: function(){ 
		var appView = new AppView();
		appView.render();
		Backbone.history.start();
	}
 }
});
define(['backbone', 'jquery', 'scripts/views/appView'], function (Backbone, $, AppView) {
 return {
		start: function(){ 
		var appView = new AppView({ el : "#hello" });
		appView.render();
		Backbone.history.start();
	}
 }
});
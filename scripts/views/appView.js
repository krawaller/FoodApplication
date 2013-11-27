define(["backbone", "jquery"],function(Backbone, $){
	return Backbone.View.extend({
		render: function(){
			this.$el.html("<h1>Hello World!</h1>");
			return this;
		}
	});
});
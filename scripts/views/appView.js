define(["backbone", "jquery"],function(Backbone, $){
	return Backbone.View.extend({
		el: $('#hello'),
		render: function(){
			this.$el.html("<h1>Hello World!</h1>");
			return this;
		}
	});
});

//define(["backbone", "jquery"], function(Backbone, $){
//	return Backbone.View.extend({
//		initialize: function(){
//			this.model.on('change', this.render, this);
//		}
//	});
//});

//define(["backbone", "jquery"], function(Backbone, $){
//	return Backbone.Collection.extend({
//		url: "createfoodlist",
//		model: Dish
//	});
//});
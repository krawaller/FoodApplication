define(["backbone", "jquery", "jade!templates/main"],function(Backbone, $, template){
	return Backbone.View.extend({
		initialize: function(){
			console.log("Initializing appView");
		},
		template: template,
		render: function(){
			this.$el.append(template({ hello: "Hello world" }));
			console.log("Appending appView Template");
			return this;
		}
	});
});
define(["Backbone", "jquery", "jade!templates/singledish"], function(Backbone, $, template){
	return Backbone.Model.extend({
		defaults: {
			title: "New Dish",
			ingredients: ""
		},
		template: template,
		initialize: function() {
			this.collection.on('all', this.render, this);
		},
		render: function(){
			this.$el.empty();
			this.$el.append(template());
			return this;
		},
		title: function() { return this.get('title'); },
		ingredients: function(){ return this.get('ingredients'); }
	});
});
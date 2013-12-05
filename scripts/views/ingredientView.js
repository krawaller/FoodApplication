define(["backbone", "jquery", "jade!templates/ingredients"], function(Backbone, $, template){
	return Backbone.View.extend({
		el: "#listIngredientsDiv",
		template: template,
		initialize: function(){
			this.collection.on('change', this.render(), this)
		},
		render: function(){
			console.log("wat");
			this.$el.empty();
			this.$el.append(template({ingredients:this.collection.models}));
			return this;
		}
	});
});
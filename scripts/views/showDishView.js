define(["backbone", "jquery", "underscore", "jade!templates/showDish", "scripts/collection/ingredients"], 
	function(Backbone, $, _, template, Ingredients){
	return Backbone.View.extend({
		template: template,
		initialize: function() {
			this.ingredients = new Ingredients();
			this.ingredients.fetch();
			console.log(this.ingredients);
			this.dishIngredients = this.ingredients.where({dishTitle: this.model.get('title')});
			console.log(this.dishIngredients);
		},
		render: function(){
			this.$el.empty();
			this.$el.append(template({ingredients: this.ingredients.models, title: this.model.get('title')}));
			return this;
		}
	});
});
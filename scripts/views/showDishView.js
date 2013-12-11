define(["backbone", "jquery", "underscore", "jade!templates/showDish", "scripts/collection/ingredients"], 
	function(Backbone, $, _, template, Ingredients){
	return Backbone.View.extend({
		template: template,
		initialize: function() {
			this.ingredients = new Ingredients();
		},
		render: function(){
			var that = this;
			this.ingredients.fetch({
				success: function(models){
					that.dishIngredients = models.where({dishTitle: that.model.get('title')});
					that.$el.empty();
					that.$el.append(template({ingredients: that.dishIngredients, title: that.model.get('title')}));
					return that;
				}
			});
		}
	});
});
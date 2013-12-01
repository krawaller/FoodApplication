define(["backbone", "jquery", "jade!templates/createDish", "scripts/models/Dish", "scripts/models/Ingredient"], function(Backbone, $, template, Dish, Ingredient){
	return Backbone.View.extend({
		tagName: "li",
		template: template,
		initialize: function() {
			//Dish.Fetch();
		},
		render: function(){
			this.$el.empty();
			this.$el.append(template());
			return this;
		},
		events: {
			"keypress .addIngredient"	: "createOnEnter"
		},
		createOnEnter: function(e){
			if(e.keyCode != 13) return;
			if(!this.input.val()) return;

			//Ingredient.create({title: this.input.val()});
			this.input.val('');
		}
	});
});
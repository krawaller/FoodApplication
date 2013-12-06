define(["backbone", "jquery", "jade!templates/createDish", "scripts/models/Dish", "scripts/views/ingredientView"], function(Backbone, $, template, Dish, ingrediView){
	return Backbone.View.extend({
		template: template,
		initialize: function() {
			this.dish = new Dish();
			this.dish.ingredients.on("change", this.render(), this);
		},
		render: function(){
			var title = this.$el.find("#title").val();
			this.$el.empty();
			this.$el.append(template({ingredients: this.dish.ingredients.models, title: title}));
			return this;
		},
		events: {
			"keypress #addIngredient"	: "createOnEnter",
			"click .btn"				: "finishRecipe"
		},
		createOnEnter: function(e){
			if(e.keyCode != 13) return;
			if(!this.$("#addIngredient").val()) return;
			console.log("Value of ingredient just added: " + $("#addIngredient").val());
			this.dish.addIngredient($("#addIngredient").val());
			this.$("#addIngredient").val('');
		},
		finishRecipe: function(){
			if(!this.$("#title").val()){
				console.log("Can't have a recipe without a title!");
				return;	
			} 
			this.dish.title = this.$("#title").val();
		}
	});
});
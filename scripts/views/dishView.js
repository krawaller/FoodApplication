define(["backbone", "jquery", "jade!templates/createDish", "scripts/models/Dish", "scripts/models/Ingredient"], function(Backbone, $, template, Dish, Ingredient){
	return Backbone.View.extend({
		template: template,
		initialize: function() {
			this.dish = new Dish();
		},
		render: function(){
			this.$el.empty();
			console.log("wat");
			this.$el.append(template({ingredients:this.dish.ingredients}));
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
			console.log(this.dish.ingredients);
			this.$("#addIngredient").val('');
			//this.render();
		},
		finishRecipe: function(){
			if(!this.$("#title").val()){
				console.log("Can't have a recipe without a title!");
				return;	
			} 
			this.dish.title = this.$("#title").val();
			console.log(this.dish.title);
		}
	});
});
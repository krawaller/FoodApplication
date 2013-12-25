define(["backbone", "jquery", "underscore", "jade!templates/showDish", "scripts/collection/Ingredients"], 
	function(Backbone, $, _, template, Ingredients){
	return Backbone.View.extend({
		template: template,
		initialize: function(options) {
			this.ingredients = options.ingredients;
		}, //Events for this view
		events : {
			"click .h3title": "editTitle",
			"keypress .titleinput": "finishEdit"
		}, //Edit the title..
		editTitle: function(){
			var title = $(".h3title").html();
			$(".h3title").replaceWith("<input type='text' class='titleinput' value='" + title + "'></input>");
		}, //Finishing of the edit - since i have to change the parentID of the ingredients.
		finishEdit: function(e){
			if(e.keyCode != 13) return;
			if(!this.$(".titleinput").val()) return;		
			console.log(this.collection.models);	
			for(var i = 0; i < this.collection.models.length; i++)
			{
				if(this.collection.models[i].get('title') == this.$(".titleinput").val().trim())
				{
					console.log("exists!");
					return;
				}
			}
			var that = this;
			this.ingredients.fetch({
				success: function(models){
					that.model.set({"title": that.$(".titleinput").val().trim()});
					for(var i = 0; i < that.ingredients.models.length; i++)
					{
						that.ingredients.models[i].set({"dishTitle": that.model.get('title')});
					}
					$(".titleinput").replaceWith("<h3 class='h3title'>" + that.model.get('title') + "</h3>");
				}
			});
		}, //rendering this view
		render: function(){
			console.log(models);
			this.dishIngredients = models.where({dishTitle: this.model.get('title')});
			console.log(this.dishIngredients);
			this.$el.empty();
			this.$el.append(template({ingredients: this.dishIngredients, title: this.model.get('title')}));
		}
	});
});
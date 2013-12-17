define(["backbone", "jquery", "underscore", "jade!templates/showDish", "scripts/collection/Ingredients"], 
	function(Backbone, $, _, template, Ingredients){
	return Backbone.View.extend({
		template: template,
		initialize: function() {
		},
		events : {
			"click .h3title": "editTitle",
			"keypress .titleinput": "finishEdit"
		},
		editTitle: function(){
			var title = $(".h3title").html();
			$(".h3title").replaceWith("<input type='text' class='titleinput' value='" + title + "'></input>");
		},
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

			this.model.set({"title": this.$(".titleinput").val().trim()});
			$(".titleinput").replaceWith("<h3 class='h3title'>" + this.model.get('title') + "</h3>");
		},
		render: function(){
			var that = this;
			this.collection.fetch({
				success: function(models){
					console.log(models);
					that.dishIngredients = models.where({dishTitle: that.model.get('title')});
					console.log(that.dishIngredients);
					that.$el.empty();
					that.$el.append(template({ingredients: that.dishIngredients, title: that.model.get('title')}));
					//return that;
				}
			});
		}
	});
});
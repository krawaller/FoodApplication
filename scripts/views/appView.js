define(["backbone", "jquery", "underscore", "jade!templates/foodlist"],function(Backbone, $, _, template){
	return Backbone.View.extend({
		initialize: function(options){
			console.log("Initializing appView");
			this.listenTo(this.collection, "all", this.render);
			this.ingredients = options.ingredients;
		},
		template: template,
		events:{
			"click .dishtitle": "showdish",
			"click .deletedish": "deletedish",
			"mouseenter .dishes": "hoverOn",
			"mouseleave .dishes": "hoverOff"
		},
		//Renders stuff.
		render: function(){
			this.$el.empty();
			this.$el.append(template({ foodlist: this.collection.models }));
			return this;
		},
		//Triggers the showdish event to the masterview
		showdish: function(e){
			//Gets the PrimaryID of the dish (unique names n stuff.)
			var id = $(e.currentTarget).html();
			this.trigger("showDish", {dishTitle:id});
		},
		//Deletes dishes
		deletedish: function(e){
			var id = $(e.currentTarget).parent().children('h3').html();
			console.log(id);
			if(id !== "")
			{
				var model = this.collection.where({title: id})
				console.log(model);
				if(confirm("Are you sure you want to delete this dish?"))
				{
					//Removing all ingredients with this parent
					console.log(this.ingredients.models.length);
					console.log(this.ingredients.where({dishTitle: id}));
					this.ingredients.remove(this.ingredients.where({dishTitle: id}));
					console.log(this.ingredients.models.length);
					model[0].destroy();
				}
				else
				{
					return;
				}
			}
		},
		//Shows the delete button when the dish is hovered
		hoverOn: function(e){
			$(e.currentTarget).parent().find(".deletedish").addClass("showbutton");
		},
		//Hides the delete button when you don't hover over a dish
		hoverOff: function(e){
			$(e.currentTarget).parent().find(".deletedish").removeClass("showbutton");
		}
	});
});

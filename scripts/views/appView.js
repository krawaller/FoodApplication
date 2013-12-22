define(["backbone", "jquery", "underscore", "jade!templates/foodlist"],function(Backbone, $, _, template){
	return Backbone.View.extend({
		initialize: function(options){
			console.log("Initializing appView");
			this.listenTo(this.collection, "all", this.render());
			this.ingredients = options.ingredients;
		},
		template: template,
		events:{
			"click .dishtitle": "showdish",
			"click .deletedish": "deletedish",
			"mouseenter .dishes": "hoverOn",
			"mouseleave .dishes": "hoverOff"
		},
		render: function(){
			this.$el.empty();
			this.$el.append(template({ foodlist: this.collection.models }));
			//return this;
		},
		showdish: function(e){
			var id = $(e.currentTarget).html();
			this.trigger("showDish", {dishTitle:id});
		},
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
					this.ingredients.remove(this.ingredients.where({dishTitle: id}));
					model[0].destroy();
				}
				else
				{
					return;
				}
			}
		},
		hoverOn: function(e){
			$(e.currentTarget).parent().find(".deletedish").addClass("showbutton");
		},
		hoverOff: function(e){
			$(e.currentTarget).parent().find(".deletedish").removeClass("showbutton");
		}
	});
});
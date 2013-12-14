define(["backbone", "jquery", "underscore", "jade!templates/foodlist", "scripts/collection/FoodList"],function(Backbone, $, _, template, FoodList){
	return Backbone.View.extend({
		initialize: function(){
			console.log("Initializing appView");
		//	this.collection.on('all', this.render, this);
		//	this.foodlist = new FoodList();
		//	this.foodlist.fetch({
		//		success: function(){
		//			return;
		//		}
		//	});
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
			return this;
		},
		showdish: function(e){
			document.location.href += "#showdish/" + $(e.currentTarget).html();
		},
		deletedish: function(e){
			var id = $(e.currentTarget).closest('h3').html();//parent().children('h3').data('id');
			console.log(id);
			if(id !== "")
			{
				var model = this.collection.where({title: id})
				//(function(){
				//	return model.get('title') == id;
				//});
				if(confirm("Are you sure you want to delete this dish?"))
				{
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
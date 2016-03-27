FoodTruckMe.Views.FoodtrucksIndex = Backbone.View.extend({
	template: JST["foodtrucks/index"],

	events: {
		"click button#addAllMarkers": "addAllMarkers",
		"click button#clearAllMarkers": "clearAllMarkers"
	},
	
	addAllMarkers: function () {
		Backbone.trigger('addAllMarkers');
		this.collection.fetch();
	},
	
	clearAllMarkers: function () {
		Backbone.trigger('clearAllMarkers');
		this.collection.fetch();
	},

	render: function () {
		var renderedContent = this.template({
			foodtrucks: this.collection
		});

		this.$el.html(renderedContent);
				
		return this;
	},
});

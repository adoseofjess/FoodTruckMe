FoodTruckMe.Views.FoodtrucksIndex = Backbone.View.extend({
	template: JST["foodtrucks/index"],

	events: {
		"click button#refresh": "refresh"
	},

	initialize: function (option) {
		this.listenTo(
			this.collection, 
			"sync", 
			this.render
		);
	},

	refresh: function () {
		this.collection.fetch();
	},

	render: function () {
		var renderedContent = this.template({
			foodtrucks: this.collection
		});

		this.$el.html(renderedContent);
		
		return this;
	}
});

FoodTruckMe.Views.FoodtrucksIndex = Backbone.View.extend({
	template: JST["foodtrucks/index"],

	events: {
		"click button#refresh": "refresh"
	},

	refresh: function () {
		var view = this;

		this.collection.fetch({
			success: function () { view.render() }
		});
	},

	render: function () {
		var renderedContent = this.template({
			foodtrucks: this.collection
		});

		this.$el.html(renderedContent);
		
		return this;
	}
});

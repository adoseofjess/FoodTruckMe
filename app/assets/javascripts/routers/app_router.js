FoodTruckMe.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "foodtrucksIndex"
	},

	foodtrucksIndex: function() {
		var view = new FoodTruckMe.Views.FoodtrucksIndex({
			collection: FoodTruckMe.Collections.foodtrucks
		});

		FoodTruckMe.Collections.foodtrucks.fetch();
		$("body").html(view.render().$el);
	}
});

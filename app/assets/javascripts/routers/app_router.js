FoodTruckMe.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "mapView"
	},

	foodtrucksIndex: function() {
		var view = new FoodTruckMe.Views.FoodtrucksIndex({
			collection: FoodTruckMe.Collections.foodtrucks
		});

		FoodTruckMe.Collections.foodtrucks.fetch();
		$(".app").html(view.render().$el);
	},
	
	mapView: function() {
		var view = new FoodTruckMe.Views.MapView({
		});

		FoodTruckMe.Collections.foodtrucks.fetch();
		$("#map").html(view.render().$el);
	}
});

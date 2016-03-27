FoodTruckMe.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "mapView"
	},

	mapView: function() {
		var mapView = new FoodTruckMe.Views.MapView({
			collection: FoodTruckMe.Collections.foodtrucks,
			events: this.events
		});
		
		var foodTruckIndex = new FoodTruckMe.Views.FoodtrucksIndex({
			collection: FoodTruckMe.Collections.foodtrucks
		});
		
		FoodTruckMe.Collections.foodtrucks.fetch();
		$("#map").html(mapView.render().$el);
		$("#filters").html(foodTruckIndex.render().$el);
	}
});

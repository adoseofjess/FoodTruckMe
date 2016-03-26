FoodTruckMe.Collections.Foodtrucks = Backbone.Collection.extend({
	model: FoodTruckMe.Models.FoodTruck,
	url: "/food_trucks",
});

FoodTruckMe.Collections.foodtrucks = new FoodTruckMe.Collections.Foodtrucks();

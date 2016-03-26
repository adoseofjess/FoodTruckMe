window.FoodTruckMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var view = new FoodTruckMe.Views.FoodtrucksIndex({
			collection: FoodTruckMe.Collections.foodtrucks
		});

		FoodTruckMe.Collections.foodtrucks.fetch();
		$("body").append(view.render().$el);
  }
};

$(document).ready(function(){
  FoodTruckMe.initialize();
});

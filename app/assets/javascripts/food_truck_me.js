window.FoodTruckMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var view = new FoodTruckMe.Views.FoodtrucksIndex({
			foodtrucks: FoodTruckMe.Collections.foodtrucks
		});
		FoodTruckMe.Collections.foodtrucks.fetch({
			success: function () {
				$("body").append(view.render().$el);
			}
		});
  }
};

$(document).ready(function(){
  FoodTruckMe.initialize();
});

window.FoodTruckMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var view = new FoodTruckMe.Views.FoodtrucksIndex();
		FoodTruckMe.Collections.foodtrucks.fetch({
			success: function () {
				view.render();
				$("body").append(view.$el);
			}
		});
  }
};

$(document).ready(function(){
  FoodTruckMe.initialize();
});

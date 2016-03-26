window.FoodTruckMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new FoodTruckMe.Routers.AppRouter();
		Backbone.history.start();
  }
};

$(document).ready(function(){
  FoodTruckMe.initialize();
});

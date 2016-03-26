FoodTruckMe.Views.MapView = Backbone.View.extend({
	initialize: function (option) {
	},

	initMap: function () {
		alert("init map");
	},

	render: function () {
		var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
	}
});

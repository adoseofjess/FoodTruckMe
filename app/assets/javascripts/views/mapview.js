FoodTruckMe.Views.MapView = Backbone.View.extend({
	el: "#map",
	
	events: {
		"click button#refresh": "refresh",
		"click div": "click",
		"click button": "click"
	},
	
	click: function () {
		alert("CLICK");
	},
	
	render: function () {
		var map = new google.maps.Map(this.el, {
	    center: {lat: 37.773972, lng: -122.431297},
	    zoom: 13
	  });

		return this;
	},

});

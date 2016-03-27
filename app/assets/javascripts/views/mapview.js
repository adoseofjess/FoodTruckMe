FoodTruckMe.Views.MapView = Backbone.View.extend({
	el: "#map",
	
	template: JST["foodtrucks/mapview"],
	
	events: {
		"click button#refresh": "refresh",
		"click div": "click",
		"click button": "click"
	},
	
	initialize: function (option) {	
		this.listenTo(
			this.collection,
			"sync",
			this.addMarkers
		);
	},
	
	click: function () {
	},
	
	drawMarkers: function () {
		// var markers = []
		// var that = this;
		new google.maps.Marker({
	    map: this._map,
	    position: {lat: 37.773972, lng: -122.431297}
	  })

		// this.collection.forEach(function(model) {
		// 	console.log(model);
			// new google.maps.Marker({
			// 		    map: that._map,
			// 		    position: {lat: 37.773972, lng: -122.431297}
			// 		  })
		// })
	},
	
	addMarker: function (model) {
		new google.maps.Marker({
			position: new google.maps.LatLng({lat: model.get("latitude"), lng: model.get("longitude")}),
			map: this._map,
			title: "Test"
		});
	},
	
	addMarkers: function (collection) {
		collection.each(this.addMarker.bind(this));
	},
	
	render: function () {		
		console.log("in render");
		this._map = new google.maps.Map(this.el, {
	    center: {lat: 37.773972, lng: -122.431297},
	    zoom: 13,
			zoomControl: true,
	  });
		console.log(this._map);
    var input = document.getElementById('pac-input');
	
    var searchBox = new google.maps.places.SearchBox(input);
    this._map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    var that = this;
		this._map.addListener('bounds_changed', function() {
      console.log("bounds changed");
			searchBox.setBounds(that._map.getBounds());
    });
				
		return this;
	},

});

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
	
	addMarker: function (model) {
		console.log(model);
		var contentString = '<div id="content">'+
		      '<h1 id="firstHeading" class="firstHeading">' + model.get("applicant") + '</h1>'+
		      '<div id="bodyContent">'+
		      '<li>Address: ' + model.get("address") + 
					'<li>Items: ' + model.get("fooditems") + 
			 		'<li>Location Description: ' + model.get("locationdescription") + 
					
		      '</div>'+
		      '</div>';
		
		var infoWindow = new google.maps.InfoWindow({
	    content: contentString
	  });
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng({lat: model.get("latitude"), lng: model.get("longitude")}),
			map: this._map
		});
		
		var that = this;
		google.maps.event.addListener(marker,'click', (function(marker, infoWindow){ 
				return function() {
		        infoWindow.open(that._map,marker);
		    };
		})(marker,infoWindow)); 
	},
	
	addMarkers: function (collection) {
		collection.each(this.addMarker.bind(this));
	},
	
	render: function () {		
		this._map = new google.maps.Map(this.el, {
	    center: {lat: 37.773972, lng: -122.431297},
	    zoom: 13,
			zoomControl: true,
	  });

    var input = document.getElementById('pac-input');
	
    var searchBox = new google.maps.places.SearchBox(input);
    this._map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    var that = this;
		this._map.addListener('bounds_changed', function() {
			searchBox.setBounds(that._map.getBounds());
    });
		
		var markers = [];
		
	// Listen for the event fired when the user selects a prediction and retrieve
	  // more details for that place.
	  searchBox.addListener('places_changed', function() {
	    var places = searchBox.getPlaces();

	    if (places.length == 0) {
	      return;
	    }

	    // Clear out the old markers.
	    markers.forEach(function(marker) {
	      marker.setMap(null);
	    });
	    markers = [];

	    // For each place, get the icon, name and location.
	    var bounds = new google.maps.LatLngBounds();
	    places.forEach(function(place) {
	      var icon = {
	        url: place.icon,
	        size: new google.maps.Size(71, 71),
	        origin: new google.maps.Point(0, 0),
	        anchor: new google.maps.Point(17, 34),
	        scaledSize: new google.maps.Size(25, 25)
	      };

	      // Create a marker for each place.
	      markers.push(new google.maps.Marker({
	        map: that._map,
	        icon: icon,
	        title: place.name,
	        position: place.geometry.location
	      }));

	      if (place.geometry.viewport) {
	        // Only geocodes have viewport.
	        bounds.union(place.geometry.viewport);
	      } else {
	        bounds.extend(place.geometry.location);
	      }
	    });
	    that._map.fitBounds(bounds);
			that._map.setZoom(16);
	  });		
				
		return this;
	},

});

FoodTruckMe.Views.MapView = Backbone.View.extend({
	el: "#map",
		
	initialize: function (options) {			
		Backbone.on("addAllMarkers", this.addMarkers, this);
		Backbone.on("clearAllMarkers", this.clearAllMarkers, this);
		
		this.infoWindows = [];
		this.markers = [];
	},

	addMarker: function (model) {
		var href = "https://www.google.com/maps/dir/Current+Location/" + model.get("latitude") + "," + model.get("longitude")
		var contentString = '<div class="container" id="content">'+
		      '<h1 id="firstHeading" class="firstHeading"><u>' + model.get("applicant") + '</u></h1>'+
		      '<div id="bodyContent">'+
		      '<p class="text-muted">Address: ' + model.get("address") + '</p>' +
					'<p class="text-muted">Items: ' + model.get("fooditems") + '</p>' +
		      '<p class="text-muted">Days and Hours: ' + model.get("dayshours") + '</p>' +
		      '<p class="text-muted">Location Description: ' + model.get("locationdescription") + '</p>' +
					'<a class="btn btn-default" href=' + href + 'role="button">Get Directions</a>' +
		      '</div>'+
		      '</div>';
		
		var infoWindow = new google.maps.InfoWindow({
	    content: contentString
	  });
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng({lat: model.get("latitude"), lng: model.get("longitude")}),
			map: this._map
		});
		
		this.markers.push(marker);
		
		var that = this;
		google.maps.event.addListener(marker,'click', (function(marker, infoWindow){ 
			return function() {
				that.closeAllInfoWindows();
				
				that.infoWindows.push(infoWindow);
				infoWindow.open(that._map,marker);
		  };
		})(marker,infoWindow)); 
	},
	
	addMarkers: function () {
		this.collection.each(this.addMarker.bind(this));
	},
	
	clearAllMarkers: function () {
		for (var i = 0; i < this.markers.length; i++) {
	    this.markers[i].setMap(null);
	  }
		this.markers = [];
	},
	
	closeAllInfoWindows: function () {
	  for (var i = 0; i < this.infoWindows.length; i++) {
	     this.infoWindows[i].close();
	  }
	},
	
	render: function () {				
		this._map = new google.maps.Map(this.el, {
	    center: {lat: 37.773972, lng: -122.431297},
	    zoom: 12,
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
			that.addMarkers();
			
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

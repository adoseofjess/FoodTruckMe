FoodTruckMe.Views.FoodtrucksIndex = Backbone.View.extend({
	template: JST["foodtrucks/index"],

	events: {
		"click button#addAllMarkers": "addAllMarkers",
		"click button#clearAllMarkers": "clearAllMarkers"
	},

	click: function () {
		alert("click");
	},
	
	initialize: function (option) {
		this.listenTo(
			this.collection,
			"sync",
			this.render
		);
	},

	addAllMarkers: function () {
		Backbone.trigger('addAllMarkers');
		this.collection.fetch();
	},
	
	clearAllMarkers: function () {
		Backbone.trigger('clearAllMarkers');
		this.collection.fetch();
	},
	
	click: function () {
		alert("CLICK");
	},

	render: function () {
		var renderedContent = this.template({
			foodtrucks: this.collection
		});

		this.$el.html(renderedContent);
				
		return this;
	},
	
  afterRender: function() { 
		var map = new google.maps.Map(document.getElementById('map'), {
			    center: {lat: 37.773972, lng: -122.431297},
			    zoom: 13
			  });
  },
});

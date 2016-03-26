FoodTruckMe.Views.FoodtrucksIndex = Backbone.View.extend({
	template: JST["foodtrucks/index"],

	events: {
		"click button#refresh": "refresh",
		"click div#map": "click",
		"click button": "click"
	},

	initialize: function (option) {
		this.listenTo(
			this.collection,
			"sync",
			this.render
		);

    _.bindAll(this, 'render', 'afterRender'); 
    var _this = this; 
    this.render = _.wrap(this.render, function(render) { 
        render(); 
        _this.afterRender(); 
        return _this; 
    }); 
	},

	refresh: function () {
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

FoodTruckMe.Views.FoodtrucksIndex = Backbone.View.extend({
	initialize: function (options) {
		this.foodtrucks = options.foodtrucks;
	},
	
	render: function () {
		var $ul = $("<ul>");
		this.foodtrucks.each(function (foodtruck) {
			var $li = $("<li>");
			
			$li.text(foodtruck.get("applicant"));

			$ul.append($li);	
		}); 

		this.$el.html($ul);
		
		return this;
	}
});

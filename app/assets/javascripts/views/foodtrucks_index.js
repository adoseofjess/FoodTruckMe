FoodTruckMe.Views.FoodtrucksIndex = Backbone.View.extend({
	render: function () {
		var $ul = $("<ul>");
		FoodTruckMe.Collections.foodtrucks.each(function (foodtruck) {
			var $li = $("<li>");
			
			$li.text(foodtruck.get("applicant"));

			$ul.append($li);	
		}); 

		this.$el.html($ul);
		
		return this;
	}
});

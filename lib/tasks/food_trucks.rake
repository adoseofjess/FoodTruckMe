namespace :food_trucks do
  desc "Fetch food trucks from external api and add to database."
  task fetch: :environment do
		FOOD_TRUCKS_API_URL = "https://data.sfgov.org/resource/6a9r-agq8.json"
	  response = Faraday.get FOOD_TRUCKS_API_URL
		data = MultiJson.load(response.body)
		data.each do |data_point|
			food_truck = FoodTruck.create(data_point.slice("address", "applicant", "approved", "block", "blocklot", "cnn", "dayhours", "expirationdate", "facilitytype", "fooditems", "locationdescription", "status"))
			food_truck.update_attributes(latitude: data_point["latitude"].to_f, longitude: data_point["longitude"].to_f)
		end		
  end

end

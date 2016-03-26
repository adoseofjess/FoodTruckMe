class FoodTrucksController < ApplicationController
	def index
		@food_trucks = FoodTruck.all
		render :json => @food_trucks
	end

	def show
		@food_truck = FoodTruck.find(params[:id])
		render :json => @food_truck
	end
end

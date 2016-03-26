class CreateFoodTrucks < ActiveRecord::Migration
  def change
    create_table :food_trucks do |t|
    	t.string :address
			t.string :applicant
			t.datetime :approved
			t.string :block
			t.string :blocklot
			t.string :cnn
			t.string :dayshours
			t.string :expirationdate
			t.string :facilitytype
			t.string :fooditems
			t.float :latitude
			t.float :longitude
			t.string :locationdescription
			t.string :status
		end
  end
end

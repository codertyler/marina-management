class CreateBoats < ActiveRecord::Migration[5.2]
  def change
    create_table :boats do |t|
      t.string :name
      t.float :length
      t.string :color

      t.timestamps
    end
  end
end

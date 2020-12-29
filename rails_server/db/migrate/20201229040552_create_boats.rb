class CreateBoats < ActiveRecord::Migration[6.1]
  def change
    create_table :boats do |t|
      t.string :name
      t.float :length
      t.string :color
      t.integer :docker_number

      t.timestamps
    end
  end
end

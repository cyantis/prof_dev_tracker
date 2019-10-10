class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :name
      t.string :title
      t.text :bio
      t.integer :location_id

      t.timestamps
    end
  end
end

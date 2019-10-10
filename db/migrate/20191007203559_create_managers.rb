class CreateManagers < ActiveRecord::Migration[5.2]
  def change
    create_table :managers do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :name
      t.string :title
      t.string :bio
      t.integer :location_id

      t.timestamps
    end
  end
end

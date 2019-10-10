class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.string :category
      t.text :description
      t.boolean :shared, default: false

      t.timestamps
    end
  end
end

class CreateEmployeeEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :employee_events do |t|
      t.references :employee, foreign_key: true
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end

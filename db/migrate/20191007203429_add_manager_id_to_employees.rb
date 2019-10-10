class AddManagerIdToEmployees < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :manager_id, :integer
  end
end

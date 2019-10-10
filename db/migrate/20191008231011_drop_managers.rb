class DropManagers < ActiveRecord::Migration[5.2]
  def change
    drop_table :managers
  end
end

class AddNameToFruits < ActiveRecord::Migration[6.0]
  def change
    add_column :fruits, :name, :string
  end
end

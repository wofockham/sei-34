class AddTypeToFruits < ActiveRecord::Migration[6.0]
  def change
    add_column :fruits, :type, :string
  end
end

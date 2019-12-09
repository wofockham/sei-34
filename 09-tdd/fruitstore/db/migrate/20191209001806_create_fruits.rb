class CreateFruits < ActiveRecord::Migration[6.0]
  def change
    create_table :fruits do |t|

      t.timestamps
    end
  end
end

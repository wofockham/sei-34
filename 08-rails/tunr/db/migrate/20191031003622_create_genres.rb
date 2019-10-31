class CreateGenres < ActiveRecord::Migration[6.0]
  def change
    create_table :genres do |t|
      t.text :name

      t.timestamps
    end
  end
end

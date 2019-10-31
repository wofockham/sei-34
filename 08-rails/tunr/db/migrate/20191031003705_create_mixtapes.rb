class CreateMixtapes < ActiveRecord::Migration[6.0]
  def change
    create_table :mixtapes do |t|
      t.text :title

      t.timestamps
    end
  end
end

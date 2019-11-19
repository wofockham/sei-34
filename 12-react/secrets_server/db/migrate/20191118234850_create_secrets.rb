class CreateSecrets < ActiveRecord::Migration[6.0]
  def change
    create_table :secrets do |t|
      t.text :content

      t.timestamps
    end
  end
end

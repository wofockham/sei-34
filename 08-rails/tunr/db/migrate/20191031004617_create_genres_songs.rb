class CreateGenresSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :genres_songs, :id => false do |t|
      t.integer :genre_id
      t.integer :song_id
    end
  end
end

User.destroy_all
u1 = User.create :email => 'jonesy@ga.co', :password => 'chicken', :admin => true
u2 = User.create :email => 'craigsy@ga.co', :password => 'chicken'
puts "#{ User.count } users created"

Song.destroy_all
s1 = Song.create :title => 'Have A Safe Trip, Dear'
s2 = Song.create :title => 'Toxic'
s3 = Song.create :title => "Don't Ask Me To Dance"
s4 = Song.create :title => 'Gut Feeling'
puts "#{ Song.count } songs created"

Album.destroy_all
l1 = Album.create :title => 'Engine Takes To The Water'
l2 = Album.create :title => 'In The Zone'
l3 = Album.create :title => 'The Last Romance'
l4 = Album.create :title => 'Are We Not Men? We Are Devo'
puts "#{ Album.count } albums created"

Artist.destroy_all
a1 = Artist.create :name => 'June of 44'
a2 = Artist.create :name => 'Britney Spears'
a3 = Artist.create :name => 'Arab Strap'
a4 = Artist.create :name => 'Devo'
puts "#{ Artist.count } artists created"

Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Nautical Math Rock'
g3 = Genre.create :name => 'Folk Rock'
g4 = Genre.create :name => 'Scottish Misery Rock'
g5 = Genre.create :name => 'Bollywood Bubblegum Pop'
g6 = Genre.create :name => 'New Wave'
puts "#{ Genre.count } genres created"

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Driving Songs'
m2 = Mixtape.create :title => 'Makeout Music'
m3 = Mixtape.create :title => 'Code James'
m4 = Mixtape.create :title => 'Monkey Mongs'
puts "#{ Mixtape.count } mixtapes created"

# Associations #################################################################
puts "Albums and Songs"
l1.songs << s1
l2.songs << s2
l3.songs << s3
l4.songs << s4

puts "Artists and Songs"
a1.songs << s1
a2.songs << s2
a3.songs << s3
a4.songs << s4

puts "Genres and Songs"
s1.genres << g1 << g2
s2.genres << g5
s3.genres << g3 << g4
g6.songs << s4

puts "Mixtapes and Songs"
m1.songs << s1 << s2 << s3 << s4
m2.songs << s2 << s2 << s2 << s2
m3.songs << s2 << s4 << s2 << s4
m4.songs << s4 << s3 << s2 << s2

puts "Mixtapes and Users"
u1.mixtapes << m1 << m2
u2.mixtapes << m3 << m4

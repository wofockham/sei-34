# Control-c to exit a Ruby program:

# while true # Infinite loop
#   puts "OH EM GEE"
# end

i = 0
while i < 5
  puts "i: #{ i }"
  i += 1
end

# until - the opposite of while ################################################
i = 0
until i == 5
  puts "i: #{ i }"
  i += 1
end

# iterators ####################################################################
5.times do
  puts "OMG"
end

5.times do |num|
  puts "num: #{ num }"
end

# Count down
5.downto(0) do |j|
  puts "j: #{ j }"
end

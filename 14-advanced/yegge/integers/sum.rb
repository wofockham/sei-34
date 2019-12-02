integers = File.open 'integers.txt'

sum = 0

integers.each do |line|
  sum += line.to_i
end

puts sum

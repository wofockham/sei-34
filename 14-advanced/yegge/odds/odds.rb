# (1..99).each do |n|
#   puts n if n.odd?
# end

(1..99).step(2).each do |n|
  puts n
end

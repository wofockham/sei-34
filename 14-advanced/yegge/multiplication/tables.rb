(1..12).each do |x|
  (1..12).each do |y|
    puts "#{ '%2d' % x } * #{ '%2d' % y } = #{ '%3d' % (x*y) }" # sprintf
  end
end

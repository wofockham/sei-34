# Greeting program to experiment with keyboard input and screen output

print "What is your name: "
name = gets.chomp # Chaining to read from the keyboard and then remove the new line.

puts "Thank you for entering #{ name }."

print "What is your surname: "
surname = gets.chomp.chomp.chomp

puts "Your fullname is #{ name } #{ surname.upcase }."

print "Where do you live: "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."

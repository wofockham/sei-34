# A lot of people, when faced with a problem think "I know, I'll use regular expressions".
# Now they have two problems.
# -- Jamie Zawinski (jwz)

ARGF.each do |line|
  puts line if line =~ /wilma/ && line =~ /fred/ # /(wilma.*fred|fred.*wilma)/
end

# lr.rb - Ruby Line Reader AKA cat replacement
# Usage: ruby lr.rb whatever.txt

# ARGF is an array of the lines of each file mentioned in ARGV

ARGF.each do |line|
  puts line if line =~ /[A-Z][a-z]/
end

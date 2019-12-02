# lr.rb - Ruby Line Reader AKA cat replacement
# Usage: ruby lr.rb whatever.txt

# ARGF is an array of the lines of each file mentioned in ARGV

# Captures: (.)
# Backreferences: \1 refers to the characters matched in the first capture.

ARGF.each do |line|
  puts line if line =~ /(.)\1/
end

def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2
    # parellel assignment
    a, b = b, a + b # atomic
    n -= 1 # move towards the base case
  end

  b
end

def fibonacci_recursive
end

require 'pry'
binding.pry

def factorial_iterative(n)
  result = 1
  while n > 1 # end condition
    result *= n # mutation: changing the result: result = result * n
    n -= 1 # mutation: move towards the end condition
  end

  result
end

def factorial_recursive(n)
  if n > 1 # Keep going
    n * factorial_recursive(n - 1) # recursion: moving towards the base case
  else
    1
  end
end

require 'pry'
binding.pry

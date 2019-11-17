def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2
    # parellel assignment
    a, b = b, a + b # atomic
    n -= 1 # mutation: move towards the base case
  end

  b
end

def fibonacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
  end
end

# memoisation
def fib_memo(n)
  @fib ||= {} # @fib = @fib || {}

  if @fib[n]
    @fib[n]
  elsif n == 1 || n == 2
    1
  else
    result = fib_memo(n-1) + fib_memo(n-2)
    @fib[n] = result
    result
  end
end

# iterative recursion
def fib(n, a=1, b=1)
  if n == 1 || n == 2
    b
  else
    fib(n-1, b, a+b)
  end
end

require 'pry'
binding.pry

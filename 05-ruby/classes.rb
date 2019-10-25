# Low Ceremony Language

class MarxBrother
  # Set
  def name=(n)
    @name = n
  end

  # Get
  def name
    @name
  end

  # Setter
  def instrument=(i)
    @instrument = i
  end

  # Getter
  def instrument
    @instrument
  end

  # Setter
  def vice=(v)
    @vice = v
  end

  def vice
    @vice
  end

  def plays
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end

groucho = MarxBrother.new

require 'pry'
binding.pry

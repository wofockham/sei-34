# A class is kind of like a hash -- it has key/values pairs to store.
# BUT you have to predefine the keys that are going to be used.
# (you have to predefine the "shape")
# ALSO: unlike a hash, an object can have methods

# Super class / Parent class
class Actor
  def award_speech
    "I would to thank my parents and my agent. We did it baby."
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember and he's not my type."
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

# Inheritance
class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice # Macro: creates getters and setters

  # Variadic Constructor with default values
  def initialize(n='', i='', v='mocking authority')
    @name = n
    @instrument = i
    @vice = v
  end

  def plays
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end

groucho = MarxBrother.new 'Groucho Julius Marx', 'guitar', 'cigars'
# groucho.name = 'Groucho Julius Marx'
# groucho.instrument = 'guitar'
# groucho.vice = 'cigars'

harpo = MarxBrother.new
harpo.name = 'Harpo Marx'

require 'pry'
binding.pry

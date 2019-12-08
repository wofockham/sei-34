class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # AKA unshift
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value)
    last.next = Node.new value
  end

  def last
    node = @head
    while node && node.next
      node = node.next # step once more along the list
    end
    node
  end

  def remove # AKA shift
    # TODO: Return nil when there are no nodes left
    node = @head
    @head = @head.next
    node.value
  end

  # TODO
  def insert_after(node, new_value)
  end

  # TODO
  def find(needle)
    # return the node with the value of needle (or nil)
  end

  # TODO: tricky
  def reverse
  end

  # TODO: trickier
  def reverse!
  end

  # TODO: tricky -- how do you accept/invoke a block?
  def each
  end

  # Also TODO: .map, .reduce, .select, .reject etc
  # Bonus: bros.at_index(7) equivalent to bros[7]
end

bros = SinglyLinkedList.new 'Groucho'
bros.prepend 'Harpo'
bros.append 'Chico'

# bros.each do |b|
#   puts b
# end

require 'pry'
binding.pry

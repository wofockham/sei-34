class Fruit < ActiveRecord::Base
  belongs_to :shelf, :optional => true

  def squishy?
    true
  end
end

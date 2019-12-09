class Fruit < ActiveRecord::Base
  belongs_to :shelf, :optional => true

  validates :name, :presence => true

  def squishy?
    true
  end
end

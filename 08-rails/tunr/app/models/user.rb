class User < ApplicationRecord
  has_many :mixtapes
  has_secure_password
end

class Location < ApplicationRecord
  has_many :employees
  has_many :managers

end

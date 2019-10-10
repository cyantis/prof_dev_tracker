class Employee < ApplicationRecord
  belongs_to :location
  #belongs_to :manager
  has_many :employee_events
  has_many :events, through: :employee_events

  validates :username, :email, :name, presence: true
  validates :username, :email, uniqueness: true

  has_secure_password


  def manager?
   manager_id.nil?
  end

 def employee?
   !manager?
 end
end

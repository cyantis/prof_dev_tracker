class Event < ApplicationRecord
  has_many :employee_events
  has_many :employees, through: :employee_events
  has_many :comments

  validates :name, :date, :category, :description, presence: true

  scope :event_order, -> { select(:category).order(:category).distinct }
  scope :recent_events, -> { order(updated_at: :desc).limit(10) }

end

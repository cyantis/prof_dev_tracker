class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :category, :description, :updated_at
  has_many :employees, serializer: EmployeeEventSerializer
end

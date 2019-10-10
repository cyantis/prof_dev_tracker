class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :category, :description
  has_many :employees, serializer: EmployeeEventSerializer
end

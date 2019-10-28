class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :name, :title, :bio, :manager_id
  has_many :events, serializer: EventEmployeeSerializer

end

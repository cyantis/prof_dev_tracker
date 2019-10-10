module EmployeesHelper

  def manager_arr
    Employee.all.collect{ |m| m if m.manager_id == nil }.compact
  end

  def employee_arr
    Employee.all.collect{ |e| e if e.manager_id == @employee.id }.compact
  end

  def employee_event_arr(employee)
    employee.events.each { |event| event }
  end

end

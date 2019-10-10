module EventsHelper

  def event_category_arr
    Event.event_order.collect { |e| e.category }
  end

end

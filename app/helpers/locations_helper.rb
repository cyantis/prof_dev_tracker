module LocationsHelper

  def org_event_arr
    Event.recent_events
  end
  
end

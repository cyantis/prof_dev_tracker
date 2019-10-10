class ApplicationController < ActionController::Base
    protect_from_forgery

    def current_user
      @employee = Employee.find_by(id: session[:user_id])
    end

    def logged_in?
      !!session[:user_id]
    end

  def require_login
    unless logged_in?
      flash[:message] = "You must be logged in to access this page."
      redirect_to new_sessions_path
    end
  end

end

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
      redirect_to new_sessions_path
    end
  end

  def current_employee
    redirect_to root_path if session[:user_id] != params[:id].to_i
  end

end

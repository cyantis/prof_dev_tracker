class SessionsController < ApplicationController

  def new
  end

  def create
    @employee = Employee.find_by(username: params[:employee][:username])
      if @employee && @employee.authenticate(params[:employee][:password])
        session[:user_id] = @employee.id
        flash[:message] = "Welcome, #{@employee.name.split(" ")[0]}!"
        redirect_to root_path
      else
        flash[:message] = "Username or password is incorrect. Please, try again."
        render :new
      end
    end

  def destroy
    session.delete :user_id
    flash[:message] = "Logout successful!"
    redirect_to root_path
  end

end

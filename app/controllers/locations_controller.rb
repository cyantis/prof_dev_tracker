class LocationsController < ApplicationController
  before_action :require_login

  def index
    @locations = Location.all
    @employee = Employee.find_by(id: session[:user_id])
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @locations }
    end
  end

end

class CommentsController < ApplicationController

  def new
    @comment = Comment.new
    @event = Event.find(params[:event_id])
    @employee = Employee.find_by_id(session[:user_id])
  end

  def create
    @comment = Comment.create(comment_params)
    @event = Event.find(params[:event_id])
    if @comment.save
      #flash[:message] = "Comment logged!"
      #render json: @event, status: 201
      redirect_to event_path(@event)
    else
      render :new
    end
  end

  def edit
    @comment = Comment.find(params[:id])
    @event = Event.find(params[:event_id])
    @employee = Employee.find_by_id(session[:user_id])
  end

  def update
    @comment = Comment.find(params[:id])
    @event = Event.find(params[:event_id])
    @comment.update(comment_params)
    #flash[:message] = "Comment Updated!"
    redirect_to event_path(@event)
  end

  def destroy
    @comment = Comment.find(params[:id])
    @event = Event.find(params[:event_id])
    @comment.destroy
    #flash[:message] = "Comment Deleted!"
    redirect_to event_path(@event)
  end


  private

  def comment_params
    params.require(:comment).permit(:content, :event_id, :employee_id)
  end

end

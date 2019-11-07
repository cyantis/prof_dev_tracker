class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  private

  def employee_params
    params.require(:comment).permit(:content, :event_id, :employee_id)
  end

end

class Api::BoardsController < ApplicationController
  def index
    user = User.find(params[:id])
    @boards = user.boards
  end

  def create
    
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end
end

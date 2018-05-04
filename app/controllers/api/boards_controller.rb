class Api::BoardsController < ApplicationController
  def index
    user = User.find(params[:id])
    @boards = user.boards
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages
    end
  end

  def show
    @board = Board.find(params[:id])
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end
end

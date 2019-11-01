class MixtapesController < ApplicationController
  def new
    @mixtape = Mixtape.new
  end

  def create
    mixtape = Mixtape.create mixtape_params
    @current_user.mixtapes << mixtape
    # @current_user.mixtapes.create mixtape_params # Creates a mixtape associated with the current user.
    redirect_to root_path
  end

  private
  def mixtape_params
    params.require(:mixtape).permit(:title)
  end
end

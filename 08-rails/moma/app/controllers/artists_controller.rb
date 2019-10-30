class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params
    redirect_to artist
  end

  def show
    @artist = Artist.find params[:id]
  end

  def destroy
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path
  end

  private # The following methods can't be pointed to from routes.rb
  def artist_params
    # Strong params: white list of sanitised input -- stuff we are happy to let the user provide us.
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
  end
end

class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('created_at DESC')

    respond_to do |format|
      format.html {} # This empty block tells Rails to apply the default behaviour
      format.json { render :json => @fruits }
    end
  end
end

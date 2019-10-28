class CalcController < ApplicationController
  def calculate
    # raise "hell" # equivalent to binding.pry
    @x = params[:x].to_f
    @y = params[:y].to_f

    @result = case params[:operator]
    when '+' then @x + @y
    when '-' then @x - @y
    end
  end
end

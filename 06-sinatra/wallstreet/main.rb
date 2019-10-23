require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
  erb :form
end

get '/price' do
  @stock_symbol = params[:stock_symbol].upcase
  begin
    @info = StockQuote::Stock.quote @stock_symbol
  rescue
    redirect to('/')
  end
  erb :price
end

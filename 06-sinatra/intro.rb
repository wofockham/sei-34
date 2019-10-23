require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# Root page or home page
get '/' do
  "Hello World from the home page"
end

get '/hello' do
  "Hello from Sinatra"
end

get '/goodbye' do
  "Goodbye cruel world"
end

get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is: #{ `uptime` }"
end

# Marx Brothers Fan Club - an infinite number of URLs
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fan club"
end

# /fanclub/margaret/thatcher/harpo
get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fan club and their favourite Marx Brother is #{ params[:favourite].capitalize }"
end

# Second crappiest calculator of the entire course
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end

# Serious complaints:
# Where is the HTML?
# How do we get information from a user without making them change the URL?

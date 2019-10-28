Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/hello' => 'pages#hello'
  get '/goodbye' => 'pages#goodbye'
  get '/funny' => 'pages#lol'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end

Rails.application.routes.draw do
  root :to => 'pages#home'
  # resources is only for CRUD operations
  resources :users, :only => [:new, :create]

  # login is not CRUD
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end

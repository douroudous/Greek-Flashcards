Rails.application.routes.draw do
  root 'pages#home'
  resources :guesses
  resources :words
  resources :groups
end

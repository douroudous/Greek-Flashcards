Rails.application.routes.draw do
  resources :guesses
  resources :words
  resources :groups
end

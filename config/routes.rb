Rails.application.routes.draw do
  root to: 'pages#home'
  get '/kontakt', to: 'pages#kontakt', as: :kontakt
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

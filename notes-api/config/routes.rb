Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      get 'users/login', to: 'users#login'
      resources :notes
    end
  end
end

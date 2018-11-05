Rails.application.routes.draw do
  get 'home/index'

  get 'static_pages/result'
  post 'static_pages/result'
  get 'static_pages/home'
  # root 'static_pages#home'
  root to: 'home#index'
end

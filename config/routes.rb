Rails.application.routes.draw do
  get 'static_pages/result'
  post 'static_pages/result', as: 'result'
  get 'static_pages/home', as: 'home'
  root 'static_pages#home'
end

Rails.application.routes.draw do
  get 'static_pages/result'
  post 'static_pages/result'
  get 'static_pages/home'

  root 'application#hello'
end

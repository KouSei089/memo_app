Rails.application.routes.draw do
  get 'top/top'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'top#top'

  namespace :api, format: 'json' do
    resources :memos, only: [:index]
  end

  get '*path', to: 'top#top', format: false   #getのリクエストをまとめる
end

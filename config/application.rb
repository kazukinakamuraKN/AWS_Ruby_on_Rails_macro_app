require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MacroApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.action_view.field_error_proc = Proc.new do |html_tag, instance|
      %Q(#{html_tag}).html_safe
    end
    # <div class="field_with_errors"></div>が出力されないように上記三行を記述
    
    config.i18n.default_locale = :ja
    # エラーメッセージの日本語化
    # config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.yml').to_s]
    
  end
end

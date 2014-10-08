require 'protected_attributes'
require 'active_record'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra-websocket'
require 'docker'

class Dockroller < Sinatra::Base
  require 'app/models'
  register Sinatra::ActiveRecordExtension

  I18n.config.enforce_available_locales = true
end

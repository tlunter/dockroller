require 'protected_attributes'
require 'active_record'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra-websocket'
require 'docker'
require 'pry'

class Dockroller < Sinatra::Base
  require 'app/models'
  register Sinatra::ActiveRecordExtension

  I18n.config.enforce_available_locales = true

  require 'app/controllers'

  use Rack::Session::Cookie
  set :views, 'app/views'
  set :sockets, {}

  get(%r{^/favicon.ico}) { "" }
  get(%r{^/socket}) { StaticController.new(self).socket }
  get(%r{^/?$}) { StaticController.new(self).index }
end

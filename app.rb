require 'protected_attributes'
require 'active_record'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra-websocket'
require 'docker'
require 'json'
require 'pry'

class Dockroller < Sinatra::Base
  require 'app/models'
  register Sinatra::ActiveRecordExtension

  I18n.config.enforce_available_locales = true

  require 'app/controllers'

  use Rack::Session::Cookie
  set :views, 'app/views'
  set :sockets, []
  set :eventstream, false

  get('/favicon.ico') { "" }
  get('/api/containers.json') { ContainerController.new(self).index }
  get('/api/launch_objects.json') { LaunchObjectsController.new(self).index }
  get('/api/launch_object/:id.json') { |id| LaunchObjectsController.new(self).get(id) }
  get('/api/containers/events.ws') { ContainerController.new(self).socket }
  get(%r{^/*}) { StaticController.new(self).index }

  def eventstream
    return if settings.eventstream
    settings.eventstream = true
    Thread.new do
      loop do
        begin
          puts "Event stream started processing"
          Docker::Event.stream do |event|
            EM.next_tick do
              settings.sockets.each do |socket|
                socket.send("")
              end
            end
          end
        rescue => ex
          puts "Errored with: #{ex.class}: #{ex.message}"
        end
      end
    end
  end
end

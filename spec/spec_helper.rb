require 'rspec'
require 'pry'
require 'app'

Dir["#{File.dirname(__FILE__)}/support/**/*.rb"].each { |f| require f }

RSpec.configure do |config|
  config.mock_with :rspec
  config.formatter = :documentation
  config.tty = true
end

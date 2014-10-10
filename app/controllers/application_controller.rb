class ApplicationController
  attr_reader :base

  def initialize(base)
    @base = base
  end
end

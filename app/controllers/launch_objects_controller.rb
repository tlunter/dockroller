class LaunchObjectsController < ApplicationController
  def index
    LaunchObject.all.to_json(include: [:envs, :ports])
  end

  def get(id)
    LaunchObject.find(id).to_json(include: [:envs, :ports])
  end
end

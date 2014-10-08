# == Schema Information
#
# Table name: launch_object_ports
#
#  id               :integer         not null, primary key
#  launch_object_id :integer
#  host_port        :integer
#  container_port   :integer
#

class LaunchObjectPort < ActiveRecord::Base
  attr_accessor :launch_object, :host_port, :container_port

  belongs_to :launch_object
end

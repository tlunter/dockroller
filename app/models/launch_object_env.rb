# == Schema Information
#
# Table name: launch_object_envs
#
#  id               :integer         not null, primary key
#  launch_object_id :integer
#  key              :string(255)
#  value            :string(255)
#

class LaunchObjectEnv < ActiveRecord::Base
  attr_accessor :launch_object, :key, :value

  belongs_to :launch_object
end

# == Schema Information
#
# Table name: launch_objects
#
#  id                :integer         not null, primary key
#  name              :string(255)
#  env_file_path     :string(255)
#  service_object_id :integer
#

class LaunchObject < ActiveRecord::Base
  attr_accessible :name, :env_file_path

  validates_presence_of :name

  has_many :envs, class_name: 'LaunchObjectEnv'
  has_many :ports, class_name: 'LaunchObjectPort'
end

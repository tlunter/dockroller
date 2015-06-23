# == Schema Information
#
# Table name: service_objects
#
#  id   :integer         not null, primary key
#  name :string(255)
#

class ServiceObject < ActiveRecord::Base
  attr_accessible :name

  validates_presence_of :name

  has_many :launch_objects
end

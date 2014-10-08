FactoryGirl.define do
  factory :launch_object_port do
    sequence(:host_port)
    sequence(:container_port)
  end
end

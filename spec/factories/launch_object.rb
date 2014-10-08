FactoryGirl.define do
  factory :launch_object do
    sequence(:name) { |x| "LaunchObject#{x}" }
  end
end

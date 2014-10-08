FactoryGirl.define do
  factory :launch_object_env do
    sequence(:key) { |x| "Key#{x}" }
    sequence(:value) { |x| "Value#{x}" }
  end
end

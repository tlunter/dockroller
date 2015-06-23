# == Schema Information
#
# Table name: launch_objects
#
#  id                :integer         not null, primary key
#  name              :string(255)
#  env_file_path     :string(255)
#  service_object_id :integer
#

require 'spec_helper'

describe LaunchObject do
  context 'with attributes' do
    subject { FactoryGirl.build(:launch_object) }
    it 'is valid' do
      expect(subject).to be_valid
    end
  end

  context 'without a name' do
    it 'is invalid' do
      expect(subject).to_not be_valid
    end
  end

  context 'with many envs' do
    subject { FactoryGirl.build(:launch_object) }

    before do
      subject.envs.append([
        FactoryGirl.build(:launch_object_env),
        FactoryGirl.build(:launch_object_env)
      ])
    end

    it 'is valid' do
      expect(subject).to be_valid
    end
  end

  context 'with many ports' do
    subject { FactoryGirl.build(:launch_object) }

    before do
      subject.ports.append([
        FactoryGirl.build(:launch_object_port),
        FactoryGirl.build(:launch_object_port)
      ])
    end

    it 'is valid' do
      expect(subject).to be_valid
    end
  end
end

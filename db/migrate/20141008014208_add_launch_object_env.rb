class AddLaunchObjectEnv < ActiveRecord::Migration
  def change
    create_table :launch_object_envs do |t|
      t.integer :launch_object_id
      t.string :key
      t.string :value
    end
  end
end

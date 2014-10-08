class AddLaunchObject < ActiveRecord::Migration
  def change
    create_table :launch_objects do |t|
      t.string :name
      t.string :env_file_path
    end
  end
end

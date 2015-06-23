class AddServiceObjectToLaunchObject < ActiveRecord::Migration
  def change
    create_table :service_objects do |t|
      t.string :name
    end

    add_column :launch_objects, :service_object_id, :integer
  end
end

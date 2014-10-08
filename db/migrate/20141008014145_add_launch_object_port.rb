class AddLaunchObjectPort < ActiveRecord::Migration
  def change
    create_table :launch_object_ports do |t|
      t.integer :launch_object_id
      t.integer :host_port
      t.integer :container_port
    end
  end
end

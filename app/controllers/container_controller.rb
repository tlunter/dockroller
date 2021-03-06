class ContainerController < ApplicationController
  def index
    Docker::Container.all.map do |container|
      {
        id: container.id,
        command: container.info['Command'],
        created: container.info['Created'],
        image: container.info['Image'],
        names: container.info['Names'],
        ports: container.info['Ports'],
        status: container.info['Status']
      }
    end.to_json
  end

  def socket
    base.eventstream
    base.request.websocket do |ws|
      ws.onopen do
        base.settings.sockets << ws
      end
      ws.onclose do
        base.settings.sockets.delete(ws)
      end
    end
  end
end

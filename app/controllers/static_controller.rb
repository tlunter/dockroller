require 'securerandom'

class StaticController < ApplicationController
  def index
    base.erb :index
  end

  def socket
    socket = base.session['socket'] ||= SecureRandom.hex(32)
    base.request.websocket do |ws|
      ws.onopen do
        base.settings.sockets[socket] = ws
        ws.send("test")
      end
      ws.onmessage do |msg|
        EM.next_tick {
          base.settings.sockets[socket].send(msg)
        }
      end
      ws.onclose do
        base.settings.sockets.delete(socket)
        timer.cancel
      end
    end
  end
end

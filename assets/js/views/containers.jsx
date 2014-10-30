var Views = Views || {};

Views.Containers = React.createClass({
  getInitialState: function() {
    return { modelList: [] };
  },
  componentDidMount: function() {
    this.buildWebSocket();
    this.loadContainers();
  },
  componentWillUnmount: function() {
    this.closeWebSocket();
  },
  buildWebSocket: function() {
    var ws = new WebSocket('ws://localhost:9292/api/containers/events.ws');
    ws.onmessage = this.loadContainers;
    this.setState({ webSocket: ws });
  },
  closeWebSocket: function() {
    if (this.state.webSocket) {
      this.state.webSocket.close();
    }
  },
  loadContainers: function() {
    reqwest({
      url: '/api/containers.json',
      method: 'get',
      type: 'json',
      success: function(resp) {
        this.handleModelList(resp);
      }.bind(this)
    });
  },
  handleModelList: function(modelList) {
    this.setState({ modelList: modelList });
  },
  renderModelList: function() {
    return this.state.modelList.map(function(model) {
      var names = model.names.reduce(function(acc, name) {
        if (acc)
          return acc + ", " + name;
        return name;
      });
      return (
        <tr key={model.id}>
          <td className="id">{model.id.slice(0,7)}</td>
          <td className="image">{model.image}</td>
          <td className="command">{model.command}</td>
          <td className="created">{model.created}</td>
          <td className="status">{model.status}</td>
          <td className="menu"><i className="fa fa-ellipsis-v" /></td>
        </tr>
      );
    });
  },
  render: function() {
    return (
      <div>
        <table className="containers">
          <thead>
            <tr>
              <th className="id">Container ID</th>
              <th className="image">Image</th>
              <th className="command">Command</th>
              <th className="created">Created</th>
              <th className="status">Status</th>
              <th className="menu"></th>
            </tr>
          </thead>
          <tbody>
            {this.renderModelList()}
          </tbody>
        </table>
      </div>
    );
  }
});

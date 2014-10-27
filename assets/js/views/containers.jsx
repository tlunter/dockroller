var Views = Views || {};

Views.Containers = React.createClass({
  getInitialState: function() {
    return { modelList: [] };
  },
  componentDidMount: function() {
    reqwest({
      url: '/api/containers.json',
      method: 'get',
      type: 'json',
      success: function(resp) {
        this.handleModelList(resp);
      }.bind(this)
    });
  },
  handleClick: function(e) {
    e.preventDefault();

    Aviator.navigate('/');
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
        <tr>
          <td>{model.id.slice(0,7)}</td>
          <td>{model.image}</td>
          <td>{model.command}</td>
          <td>{model.created}</td>
          <td>{model.status}</td>
          <td>{model.ports}</td>
          <td>{model.names}</td>
        </tr>
      );
    });
  },
  render: function() {
    return (
      <div>
        <a href="/" onClick={this.handleClick}>Home</a>
        <table>
          <tr>
            <th>Container ID</th>
            <th>Image</th>
            <th>Command</th>
            <th>Created</th>
            <th>Status</th>
            <th>Ports</th>
            <th>Names</th>
          </tr>
          {this.renderModelList()}
        </table>
      </div>
    );
  }
});

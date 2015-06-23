import React from 'react';
import axios from 'axios';

var LaunchObject = React.createClass({
  getInitialState: function() {
    return { model: null };
  },
  componentWillMount: function() {
    this.loadModel();
  },
  loadModel: function() {
    axios.get('/api/launch_object/' + this.props.modelId + '.json')
      .then(function(resp) {
        this.handleModel(resp.data);
      }.bind(this));
  },
  handleModel: function(model) {
    this.setState({ model: model });
  },
  renderEnvs: function() {
    return this.state.model.envs.map(function(env) {
      return (
        <div className="pure-g">
          <div className="pure-u-1-2">
            {env.key}
          </div>
          <div className="pure-u-1-2">
            {env.value}
          </div>
        </div>
      );
    });
  },
  renderPorts: function() {
    return this.state.model.ports.map(function(port) {
      return (
        <div className="pure-g">
          <div className="pure-u-1-2">
            {port.host_port}
          </div>
          <div className="pure-u-1-2">
            {port.container_port}
          </div>
        </div>
      );
    });
  },
  render: function() {
    if (this.state.model) {
      return (
        <div className="pure-g">
          <div className="pure-u-1-3">
            Name: {this.state.model.name}
          </div>
          <div className="pure-u-1-3">
            {this.renderEnvs()}
          </div>
          <div className="pure-u-1-3">
            {this.renderPorts()}
          </div>
        </div>
      );
    } else {
      return <noscript />;
    }
  }
});

export default LaunchObject;

import React from 'react';
import axios from 'axios';

var LaunchObject = React.createClass({
  renderEnvs: function() {
    return this.props.model.envs.map(function(env) {
      return (
        <div className="row">
          <div className="col-1-2">
            {env.key}
          </div>
          <div className="col-1-2">
            {env.value}
          </div>
        </div>
      );
    });
  },
  renderPorts: function() {
    return this.props.model.ports.map(function(port) {
      return (
        <div className="row">
          <div className="col-1-2">
            {port.host_port}
          </div>
          <div className="col-1-2">
            {port.container_port}
          </div>
        </div>
      );
    });
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-1-3">
          <div className="row header">
            <div className="col-1-1">
              Name
            </div>
          </div>
          <div className="row">
            <div className="col-1-1">
              {this.props.model.name}
            </div>
          </div>
        </div>
        <div className="col-1-3">
          <div className="row header">
            <div className="col-1-2">
              Key
            </div>
            <div className="col-1-2">
              Value
            </div>
          </div>
          {this.renderEnvs()}
        </div>
        <div className="col-1-3">
          <div className="row header">
            <div className="col-1-2">
              Host Port
            </div>
            <div className="col-1-2">
              Container Port
            </div>
          </div>
          {this.renderPorts()}
        </div>
      </div>
    );
  }
});

export default LaunchObject;

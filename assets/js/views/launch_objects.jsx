import React from 'react';
import axios from 'axios';

import LaunchObject from 'views/launch_object.jsx';

var LaunchObjects = React.createClass({
  getInitialState: function() {
    return { modelList: [] };
  },
  componentDidMount: function() {
    this.loadLaunchObjects();
  },
  componentWillUnmount: function() {
  },
  loadLaunchObjects: function() {
    axios.get('/api/launch_objects.json')
      .then(function(resp) {
        this.handleModelList(resp.data);
      }.bind(this));
  },
  handleModelList: function(modelList) {
    this.setState({ modelList: modelList });
  },
  renderModel: function(model) {
    return <LaunchObject model={model} />;
  },
  render: function() {
    return (
      <div>
        {this.state.modelList.map(this.renderModel)}
      </div>
    );
  }
});

export default LaunchObjects;

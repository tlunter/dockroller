import React from 'react';
import axios from 'axios';

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
  renderModelList: function() {
    return this.state.modelList.map(function(model) {
      return (
        <tr key={model.id}>
          <td className="name"><a href={"/launch_object/" + model.id}>{model.name}</a></td>
          <td className="env-file-path">{model.env_file_path}</td>
          <td className="menu"><i className="fa fa-ellipsis-v" /></td>
        </tr>
      );
    });
  },
  render: function() {
    return (
      <div>
        <table className="launch-objects">
          <thead>
            <tr>
              <th className="name">Name</th>
              <th className="env-file-path">Env File Path</th>
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

export default LaunchObjects;

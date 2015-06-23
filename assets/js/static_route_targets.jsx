import React from 'react';
import Home from 'views/home.jsx';
import Containers from 'views/containers.jsx';
import LaunchObjects from 'views/launch_objects.jsx';

var StaticRouteTargets = {
  getPageNode: function() {
    return document.querySelector("#app .page");
  },
  showSection: function(component) {
    React.render(component, this.getPageNode());
  },
  home: function(request, options) {
    this.showSection(<Home />);
  },
  containers: function(request, options) {
    this.showSection(<Containers />);
  },
  launchObjects: function(request, options) {
    this.showSection(<LaunchObjects />);
  }
};

export default StaticRouteTargets;

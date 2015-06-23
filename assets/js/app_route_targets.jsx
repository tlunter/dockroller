import React from 'react';
import App from 'app.jsx';

var AppRouteTargets = {
  getAppNode: function() {
    return document.querySelector('#app');
  },
  beforeAll: function(request, options) {
    React.render(
      <App currentURI={request.uri} />,
      this.getAppNode()
    );
  }
};

export default AppRouteTargets;

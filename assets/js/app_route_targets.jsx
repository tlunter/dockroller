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

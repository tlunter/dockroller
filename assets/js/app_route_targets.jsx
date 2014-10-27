var AppRouteTargets = function(contentNode) {
  this.contentNode = contentNode;
};

AppRouteTargets.prototype = {
  showSection: function (component) {
    React.render(component, this.contentNode);
  },
  home: function (request, options) {
    this.showSection(<Views.Home />);
  },
  containers: function (request, options) {
    this.showSection(<Views.Containers />);
  }
};

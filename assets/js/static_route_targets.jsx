var StaticRouteTargets = {
  getPageNode: function() {
    return document.querySelector("#app .page");
  },
  showSection: function(component) {
    React.render(component, this.getPageNode());
  },
  home: function(request, options) {
    this.showSection(<Views.Home />);
  },
  containers: function(request, options) {
    this.showSection(<Views.Containers />);
  }
};

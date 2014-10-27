var App = function() {};

App.prototype.load = function() {
  var pageNode = document.querySelector("#page");
  var targets = new AppRouteTargets(pageNode);
  var routes = new Routes();

  routes.dispatch(targets);
};

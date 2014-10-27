var Routes = function() {};

Routes.prototype.dispatch = function(targets) {
  Aviator.setRoutes({
    target: targets,
    '/': 'home',
    '/containers': 'containers'
  });

  Aviator.dispatch();
};

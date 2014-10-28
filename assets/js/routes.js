var Routes = function() {};

Routes.prototype.dispatch = function() {
  Aviator.setRoutes({
    target: StaticRouteTargets,
    '/*': {
      target: AppRouteTargets,
      '/*': 'beforeAll'
    },
    '/': 'home',
    '/containers': 'containers'
  });

  Aviator.dispatch();
};

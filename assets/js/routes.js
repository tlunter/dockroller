var Routes = function() {};

Routes.prototype.dispatch = function() {
  Aviator.setRoutes({
    target: StaticRouteTargets,
    '/*': {
      target: AppRouteTargets,
      '/*': 'beforeAll'
    },
    '/': 'home',
    '/containers': 'containers',
    '/launch_objects': 'launchObjects',
    '/launch_object': {
      target: StaticRouteTargets,
      '/:id': 'launchObject'
    }
  });

  Aviator.dispatch();
};

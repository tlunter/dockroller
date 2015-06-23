import Aviator from 'aviator';
import AppRouteTargets from 'app_route_targets.jsx';
import StaticRouteTargets from 'static_route_targets.jsx';

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
    '/launch_object/:id': 'launchObject'
  });

  Aviator.dispatch();
};

export default Routes;

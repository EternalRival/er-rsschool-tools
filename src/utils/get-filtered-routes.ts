import { RouteName } from '~/config/router/route-name.enum';
import { Route } from '~/config/router/route.enum';

const routes = new Map([
  [RouteName.HOME, Route.HOME],
  [RouteName.X_CHECK_CALC, Route.X_CHECK_CALC],
  [RouteName.DEPLOY_FINDER, Route.DEPLOY_FINDER],
  [RouteName.URL_DUPLICATES, Route.URL_DUPLICATES],
]);

export function getFilteredRoutes(predicate: (name: RouteName, route: Route) => boolean) {
  const map = new Map<RouteName, Route>();

  routes.forEach((value, key) => {
    if (predicate(key, value)) {
      map.set(key, value);
    }
  });

  return map;
}

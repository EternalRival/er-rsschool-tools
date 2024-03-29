import { RouteName } from './enums/route-name.enum';
import { Route } from './enums/route.enum';

const routes = new Map([
  [RouteName.HOME, Route.HOME],
  [RouteName.X_CHECK_CALC, Route.X_CHECK_CALC],
  [RouteName.DEPLOY_FINDER, Route.DEPLOY_FINDER],
  [RouteName.URL_DUPLICATES, Route.URL_DUPLICATES],
]);

export type Routes = typeof routes;

export function getRoutes(): Routes {
  return new Map(routes);
}

export function getFilteredRoutes(predicate: (name: RouteName, route: Route) => boolean): Routes {
  const map = new Map<RouteName, Route>();

  routes.forEach((value, key) => {
    if (predicate(key, value)) {
      map.set(key, value);
    }
  });

  return map;
}

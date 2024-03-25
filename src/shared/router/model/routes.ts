import { RouteName } from './enums/route-name.enum';
import { Route } from './enums/route.enum';

import type { RouteObject } from './types/route-object.type';

export const routes: RouteObject[] = [
  { route: Route.HOME, name: RouteName.HOME },
  { route: Route.X_CHECK_CALC, name: RouteName.X_CHECK_CALC },
  { route: Route.DEPLOY_FINDER, name: RouteName.DEPLOY_FINDER },
  { route: Route.URL_DUPLICATES, name: RouteName.URL_DUPLICATES },
];

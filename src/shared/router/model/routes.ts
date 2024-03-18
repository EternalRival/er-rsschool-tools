import { Route } from './enums/route.enum';

import type { RouteObject } from './types/route-object.type';

export const routes: RouteObject[] = [
  { route: Route.HOME, name: 'Home' },
  { route: Route.X_CHECK_CALC, name: 'XCheckCalc' },
  { route: Route.DEPLOY_FINDER, name: 'DeployFinder' },
];

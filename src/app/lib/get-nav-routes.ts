import { Route } from '@/shared/router';

import type { RouteObject } from '@/shared/router';

export function getFilteredNavRoutes(routes: RouteObject[]): RouteObject[] {
  return routes.filter((route) => route.route !== Route.HOME);
}

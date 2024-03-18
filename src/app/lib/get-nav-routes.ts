import { Route, type RouteObject } from '@/shared/router';

type GetNavRoutes = (routes: RouteObject[]) => RouteObject[];

export const getFilteredNavRoutes: GetNavRoutes = (routes) => routes.filter((route) => route.route !== Route.HOME);

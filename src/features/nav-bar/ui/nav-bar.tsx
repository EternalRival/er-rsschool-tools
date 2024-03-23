import { NavLink } from './nav-link';

import type { RouteObject } from '@/shared/router';
import type { ReactNode } from 'react';

type Props = Readonly<{
  routes: RouteObject[];
}>;

export function NavBar({ routes }: Props): ReactNode {
  return (
    <nav>
      <ul>
        {routes.map(({ name, route }) => (
          <li key={route}>
            <NavLink
              href={route}
              name={name}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

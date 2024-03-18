import { NavLink } from './nav-link';

import type { FC } from 'react';
import type { RouteObject } from '@/shared/router';

type Props = { routes: RouteObject[] };

export const NavBar: FC<Props> = ({ routes }) => (
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

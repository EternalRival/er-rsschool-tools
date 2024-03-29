import { NavLink } from './nav-link';

import type { Routes } from '@/shared/router';
import type { ReactNode } from 'react';

type Props = Readonly<{
  routes: Routes;
}>;

export function NavBar({ routes }: Props): ReactNode {
  return (
    <nav>
      <ul>
        {Array.from(routes, ([name, route]) => (
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

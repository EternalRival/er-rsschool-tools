import { NavLink } from './nav-link';

import type { Routes } from '~/shared/router';

type Props = Readonly<{
  routes: Routes;
}>;

export const NavBar = ({ routes }: Props) => (
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

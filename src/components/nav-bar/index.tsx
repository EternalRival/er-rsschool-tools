import type { FC } from 'react';
import { NavLink } from './ui/nav-link';

// [url, name]
const routes = new Map([
  ['/xcheck-calc', 'XCheckCalc'],
  ['/deploy-finder', 'DeployFinder'],
]);

export const NavBar: FC = () => (
  <nav>
    <ul>
      {Array.from(routes.entries(), ([href, name]) => (
        <li key={href}>
          <NavLink
            href={href}
            name={name}
          />
        </li>
      ))}
    </ul>
  </nav>
);

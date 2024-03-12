import Link from 'next/link';
import type { FC } from 'react';

type Props = { routes: Record<string, string> };

export const Navigation: FC<Props> = ({ routes }) => (
  <nav>
    <ul className="flex p-2">
      {...Array.from(Object.entries(routes), ([href, title]) => (
        <li key={href}>
          <Link
            href={href}
            className="p-2 hover:underline hover:underline-offset-8"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

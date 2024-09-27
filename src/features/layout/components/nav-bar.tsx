import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavBarProps = {
  routes: Map<string, string>;
};

export const NavBar = ({ routes }: NavBarProps) => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul>
        {Array.from(routes, ([name, route]) => (
          <li key={route}>
            <Link
              href={route}
              className={clsx(
                'block p-3 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-chill-500',
                pathname === route ? 'bg-blue-chill-500/40' : 'hover:bg-blue-chill-500/25 active:bg-blue-chill-500/40'
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

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
                'block p-3 transition-colors',
                pathname === route ? 'bg-color3' : 'hover:bg-color3 hover:bg-opacity-60 active:bg-color3'
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

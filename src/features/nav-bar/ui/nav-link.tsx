import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { FC } from 'react';

type Props = { href: string; name: string };

export const NavLink: FC<Props> = ({ href, name }) => {
  const { pathname } = useRouter();

  const isActivePath = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'block p-3 transition-colors',
        isActivePath ? 'bg-color3' : 'hover:bg-color3 hover:bg-opacity-60 active:bg-color3'
      )}
    >
      {name}
    </Link>
  );
};

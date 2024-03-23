import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { ReactNode } from 'react';

type Props = Readonly<{
  href: string;
  name: string;
}>;

export function NavLink({ href, name }: Props): ReactNode {
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
}

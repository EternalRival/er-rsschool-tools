import clsx from 'clsx';
import Link from 'next/link';

import type { ReactNode } from 'react';

type Props = Readonly<Parameters<typeof Link>[0]>;

export function UiLink({ className, ...props }: Props): ReactNode {
  return (
    <Link
      {...props}
      className={clsx('cursor-pointer p-1 text-teal-500 hover:text-teal-400 active:text-teal-600', className)}
    />
  );
}

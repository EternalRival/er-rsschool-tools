import clsx from 'clsx';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = Readonly<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function UiAnchor({ className, target = '_blank', children, ...props }: Props): ReactNode {
  return (
    <a
      target={target}
      {...props}
      className={clsx('cursor-pointer p-1 text-teal-500 hover:text-teal-400 active:text-teal-600', className)}
    >
      {children}
    </a>
  );
}

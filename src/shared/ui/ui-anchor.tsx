import clsx from 'clsx';

import type { AnchorHTMLAttributes } from 'react';

type Props = Readonly<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const UiAnchor = ({ className, target = '_blank', children, ...props }: Props) => (
  <a
    target={target}
    {...props}
    className={clsx('cursor-pointer p-1 text-teal-500 hover:text-teal-400 active:text-teal-600', className)}
  >
    {children}
  </a>
);

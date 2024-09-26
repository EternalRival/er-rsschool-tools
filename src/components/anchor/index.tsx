import clsx from 'clsx';

import type { AnchorHTMLAttributes } from 'react';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = ({ className, target = '_blank', children, ...props }: AnchorProps) => (
  <a
    target={target}
    {...props}
    className={clsx('cursor-pointer p-1 text-teal-500 hover:text-teal-400 active:text-teal-600', className)}
  >
    {children}
  </a>
);

import clsx from 'clsx';

import type { AnchorHTMLAttributes } from 'react';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = ({ className, target = '_blank', children, ...props }: AnchorProps) => (
  <a
    target={target}
    {...props}
    className={clsx(
      'cursor-pointer p-1 text-blue-chill-600 outline-none hover:text-blue-chill-500 focus-visible:ring-2 focus-visible:ring-blue-chill-500 active:text-blue-chill-700',
      className
    )}
  >
    {children}
  </a>
);

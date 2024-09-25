import clsx from 'clsx';

import { UiLogo } from './ui-logo';
import { siteTitle } from '../model/constants';

import type { HTMLAttributes } from 'react';

type Props = Readonly<HTMLAttributes<HTMLElement>>;

export const UiHeader = ({ children, className, ...props }: Props) => (
  <header
    className={clsx('flex items-center justify-between border-b border-b-neutral-300 px-4 py-5', className)}
    {...props}
  >
    <UiLogo label={siteTitle} />
    {children}
  </header>
);

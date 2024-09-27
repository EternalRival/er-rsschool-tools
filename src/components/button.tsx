import clsx from 'clsx';

import type { ButtonHTMLAttributes } from 'react';

type Mode = 'primary' | 'outlined';

type Size = 'l' | 'm' | 's' | 'xs';

type ButtonProps = {
  mode?: Mode;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, mode = 'primary', size = 's', ...props }: ButtonProps) => (
  <button
    type="submit"
    {...props}
    className={clsx(
      'flex cursor-pointer items-center justify-center rounded-lg outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-chill-500 disabled:pointer-events-none disabled:opacity-50',
      {
        l: 'h-14 px-5 text-lg font-bold',
        m: 'h-11 px-4 text-base font-bold',
        s: 'h-8 px-3 text-sm font-normal',
        xs: 'h-6 p-2 text-xs font-normal',
      }[size],
      {
        primary: 'bg-blue-chill-600 text-blue-chill-50 hover:bg-blue-chill-500 active:bg-blue-chill-600',
        outlined: 'border border-blue-chill-500 text-blue-chill-500 hover:bg-blue-chill-100 active:bg-blue-chill-200',
      }[mode],
      className
    )}
  />
);

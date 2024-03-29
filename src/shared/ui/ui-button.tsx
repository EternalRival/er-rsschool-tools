import clsx from 'clsx';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Mode = 'primary' | 'outlined';

type Size = 'l' | 'm' | 's' | 'xs';

type Props = Readonly<
  {
    mode?: Mode;
    size?: Size;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export function UiButton({ className, mode = 'primary', size = 's', ...props }: Props): ReactNode {
  return (
    <button
      type="submit"
      {...props}
      className={clsx(
        'flex cursor-pointer items-center justify-center rounded-lg transition-colors disabled:pointer-events-none disabled:opacity-50',
        {
          l: 'h-14 px-5 text-lg font-bold',
          m: 'h-11 px-4 text-base font-bold',
          s: 'h-8 px-3 text-sm font-normal',
          xs: 'h-6 p-2 text-xs font-normal',
        }[size],
        {
          primary: 'bg-teal-500 text-teal-50 hover:bg-teal-400 active:bg-teal-600',
          outlined: 'border border-teal-500 text-teal-500 hover:bg-teal-100 active:bg-teal-200',
        }[mode],
        className
      )}
    />
  );
}

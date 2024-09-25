import clsx from 'clsx';
import Link from 'next/link';

type Props = Readonly<Parameters<typeof Link>[0]>;

export const UiLink = ({ className, ...props }: Props) => (
  <Link
    {...props}
    className={clsx('cursor-pointer p-1 text-teal-500 hover:text-teal-400 active:text-teal-600', className)}
  />
);

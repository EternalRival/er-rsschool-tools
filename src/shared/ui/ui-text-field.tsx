import clsx from 'clsx';
import { useId } from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';

type Props = Readonly<
  {
    containerClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
    label?: string;
    error?: string;
    noJumpingErrors?: true;
  } & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>
>;

export function UiTextField({
  containerClassName,
  labelClassName,
  errorClassName,
  label,
  error,
  noJumpingErrors,
  className,
  ...inputProps
}: Props): ReactNode {
  const id = useId();

  return (
    <div className={clsx('flex flex-col', containerClassName)}>
      {label && (
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        className={clsx(
          'h-8 rounded border border-solid border-neutral-300 px-2 outline-none transition-colors invalid:border-rose-500 focus:border-teal-600 focus:shadow',
          className
        )}
        {...inputProps}
      />
      {(noJumpingErrors ?? error) && (
        <span className={clsx('text-sm text-rose-500', noJumpingErrors && 'h-5', errorClassName)}>{error}</span>
      )}
    </div>
  );
}

import clsx from 'clsx';
import { useId } from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

type Props = Readonly<
  {
    containerClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
    label?: string;
    error?: string;
    noJumpingErrors?: true;
    type?: Extract<InputAttributes['type'], 'text' | 'number'>;
  } & Omit<InputAttributes, 'type'>
>;

const typeNumberReset =
  '[appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none';

export function UiTextField({
  containerClassName,
  labelClassName,
  errorClassName,
  label,
  error,
  noJumpingErrors,
  type = 'text',
  className,
  ...inputProps
}: Props): ReactNode {
  const id = useId();

  return (
    <div className={clsx(containerClassName ?? 'flex flex-col')}>
      {label && (
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={clsx(
          'h-8 rounded border border-solid border-neutral-300 px-2 outline-none transition-colors invalid:border-rose-500 focus:border-teal-600 focus:shadow',
          type === 'number' && typeNumberReset,
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

import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import type { ForwardedRef, SelectHTMLAttributes } from 'react';

type SelectOption = {
  label: string;
  value: string;
};

type SelectAttributes = SelectHTMLAttributes<HTMLSelectElement>;

type SelectProps = {
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  label?: string;
  error?: string;
  noJumpingErrors?: true;
  selectOptions: SelectOption[];
} & Omit<SelectAttributes, 'id'>;

function buildOptions(options: SelectOption[]) {
  return options.map(({ label, value }) => (
    <option
      key={label}
      value={value}
    >
      {label}
    </option>
  ));
}

const SelectComponent = (
  {
    containerClassName,
    labelClassName,
    errorClassName,
    label,
    error,
    noJumpingErrors,
    selectOptions,
    className,
    ...selectProps
  }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) => {
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
      <select
        {...selectProps}
        ref={ref}
        id={id}
        className={clsx(
          'h-8 rounded border border-solid border-neutral-300 px-2 outline-none transition-colors invalid:border-rose-500 focus:border-teal-600 focus:shadow',
          className
        )}
      >
        {...buildOptions(selectOptions)}
      </select>
      {(noJumpingErrors ?? error) && (
        <span className={clsx('text-sm text-rose-500', noJumpingErrors && 'h-5', errorClassName)}>{error}</span>
      )}
    </div>
  );
};

export const Select = forwardRef(SelectComponent);

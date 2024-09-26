import clsx from 'clsx';

import type { FormEventHandler, PropsWithChildren } from 'react';

type FormProps = PropsWithChildren<{
  legendText?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
}>;

export const Form = ({ children, legendText, onSubmit, className }: FormProps) => (
  <form
    className="bg-color1 p-2 shadow shadow-color4"
    onSubmit={onSubmit}
  >
    <fieldset className={clsx('p-2', className)}>
      <legend className="text-lg font-medium">{legendText}</legend>
      {children}
    </fieldset>
  </form>
);

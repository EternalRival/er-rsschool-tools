import clsx from 'clsx';

import type { FormEventHandler, ReactNode } from 'react';

type Props = Readonly<{
  children: ReactNode;
  legendText?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
}>;

export const UiForm = ({ children, legendText, onSubmit, className }: Props) => (
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

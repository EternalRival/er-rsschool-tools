import clsx from 'clsx';

import type { DOMAttributes, ReactNode } from 'react';

type Props = Readonly<{
  children: ReactNode;
  legendText?: string;
  handleSubmit?: DOMAttributes<HTMLFormElement>['onSubmit'];
  className?: string;
}>;

export function UiForm({ children, legendText, handleSubmit, className }: Props): ReactNode {
  return (
    <form
      className="bg-color1 p-2 shadow shadow-color4"
      onSubmit={handleSubmit}
    >
      <fieldset className={clsx('p-2', className)}>
        <legend className="text-lg font-medium">{legendText}</legend>
        {children}
      </fieldset>
    </form>
  );
}

import type { DOMAttributes, ReactNode } from 'react';

type Props = Readonly<{
  children: ReactNode;
  legendText?: string;
  handleSubmit?: DOMAttributes<HTMLFormElement>['onSubmit'];
}>;

export function StyledForm({ children, legendText, handleSubmit }: Props): ReactNode {
  return (
    <form
      className="bg-color1 p-2 shadow shadow-color4"
      onSubmit={handleSubmit}
    >
      <fieldset className="grid grid-cols-[repeat(2,_max-content)] items-center justify-items-end p-2">
        <legend className="text-lg font-medium">{legendText}</legend>
        {children}
      </fieldset>
    </form>
  );
}

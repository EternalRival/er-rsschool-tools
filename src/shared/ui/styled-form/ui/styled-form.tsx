import type { DOMAttributes, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  legendText?: string;
  handleSubmit: DOMAttributes<HTMLFormElement>['onSubmit'];
};

export const StyledForm: FC<Props> = ({ children, legendText, handleSubmit }) => (
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

StyledForm.defaultProps = { legendText: '' };

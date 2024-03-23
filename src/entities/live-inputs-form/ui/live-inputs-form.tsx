import { Fragment } from 'react';

import { debounce } from '@/shared/lib/debounce';
import { StyledForm } from '@/shared/ui/styled-form';

import type { FormEvent, FormEventHandler, ReactNode } from 'react';
import type { FormFieldProps } from '../model/form-field-props.type';

type Props = Readonly<{
  legendText: string;
  inputPropsList: FormFieldProps[];
  handleSubmit: FormEventHandler<HTMLFormElement>;
  debounceMs?: number;
}>;

export function LiveInputsForm({ legendText, inputPropsList, handleSubmit, debounceMs }: Props): ReactNode {
  function handleInputFn({ target }: FormEvent<HTMLInputElement>): void {
    if (target instanceof HTMLInputElement) {
      target.form?.requestSubmit();
    }
  }

  const handleInput = debounceMs ? debounce(handleInputFn, debounceMs) : handleInputFn;

  return (
    <StyledForm
      legendText={legendText}
      handleSubmit={handleSubmit}
    >
      {inputPropsList.map(({ className, label, name, type = 'text', value }) => (
        <Fragment key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            className={className}
            type={type}
            onInput={handleInput}
            defaultValue={value}
            placeholder="<empty>"
          />
        </Fragment>
      ))}
    </StyledForm>
  );
}

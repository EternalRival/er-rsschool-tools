import { Fragment } from 'react';

import { debounce } from '@/shared/lib/debounce';
import { StyledForm } from '@/shared/ui/styled-form';

import type { FC, FormEventHandler } from 'react';
import type { FormFieldProps } from '../model/form-field-props.type';

type Props = {
  legendText: string;
  inputPropsList: FormFieldProps[];
  handleSubmit: FormEventHandler<HTMLFormElement>;
  debounceMs?: number;
};

export const LiveInputsForm: FC<Props> = ({ legendText, inputPropsList, handleSubmit, debounceMs }) => {
  const handleInputFn: FormEventHandler<HTMLInputElement> = ({ target }) => {
    if (target instanceof HTMLInputElement) {
      target.form?.requestSubmit();
    }
  };

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
};

LiveInputsForm.defaultProps = { debounceMs: 1000 };

import { UiTextField } from '~/shared/ui';

import type { FormEventHandler } from 'react';
import type { FormFieldProps } from '../model/form-field-props.type';

export function FormFields({
  inputPropsList,
  onInput,
}: {
  inputPropsList: FormFieldProps[];
  onInput: FormEventHandler<HTMLInputElement>;
}) {
  return inputPropsList.map(({ label, name, className, value }) => (
    <UiTextField
      key={name}
      label={label}
      name={name}
      onInput={onInput}
      defaultValue={value}
      placeholder="<empty>"
      containerClassName="contents"
      labelClassName="justify-self-end"
      className={className}
    />
  ));
}

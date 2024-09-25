import { UiTextField } from '~/shared/ui';

import type { FormFieldProps } from '../model/form-field-props.type';

export function FormFields({ inputPropsList }: { inputPropsList: FormFieldProps[] }) {
  return inputPropsList.map(({ label, name, className, value }) => (
    <UiTextField
      key={name}
      label={label}
      name={name}
      type="number"
      onInput={({ target }) => {
        if (target instanceof HTMLInputElement) {
          target.form?.requestSubmit();
        }
      }}
      defaultValue={value}
      placeholder="<empty>"
      containerClassName="contents"
      labelClassName="justify-self-end"
      className={className}
    />
  ));
}

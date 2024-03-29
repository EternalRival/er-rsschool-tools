import type { FormFieldProps } from './form-field-props.type';

export const inputsFormProps: FormFieldProps[] = [
  { label: 'Max Score:', name: 'max', className: 'w-20', type: 'number', value: '100' },
  { label: 'Self-check:', name: 'self', className: 'w-20', type: 'number', value: '0' },
  { label: 'Reviewer 1:', name: 'reviewer1', className: 'w-20', type: 'number' },
  { label: 'Reviewer 2:', name: 'reviewer2', className: 'w-20', type: 'number' },
  { label: 'Reviewer 3:', name: 'reviewer3', className: 'w-20', type: 'number' },
  { label: 'Reviewer 4:', name: 'reviewer4', className: 'w-20', type: 'number' },
];

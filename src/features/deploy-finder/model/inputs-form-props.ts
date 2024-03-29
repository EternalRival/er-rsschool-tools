import type { FormFieldProps } from './form-field-props.type';

export const inputsFormProps: FormFieldProps[] = [
  { label: 'Github nickname:', name: 'nickname', className: 'lowercase' },
  { label: 'Course:', name: 'course', className: 'uppercase placeholder:lowercase' },
  { label: 'Taskname:', name: 'task', className: 'lowercase' },
];

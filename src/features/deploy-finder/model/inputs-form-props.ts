import type { FormFieldProps } from '@/entities/live-inputs-form';

export const inputsFormProps: FormFieldProps[] = [
  { label: 'Github nickname:', name: 'nickname', className: 'lowercase' },
  { label: 'Course:', name: 'course', className: 'uppercase' },
  { label: 'Taskname:', name: 'task', className: 'lowercase' },
];

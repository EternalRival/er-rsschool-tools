import { useForm } from 'react-hook-form';

import { Button } from '~/components/button';
import { Form } from '~/components/form';
import { TextField } from '~/components/text-field';
import { RouteName } from '~/config/router/route-name.enum';

import type { InputFormData } from '../../types/input-form-data.type';

const TEXTAREA_PROPS = {
  cols: 80,
  rows: 8,
  placeholder: [1, 2, 3].map((n) => `https://example.com/${n}`).join('\n'),
};

type InputFormProps = {
  onSubmit: (data: InputFormData) => void;
};

export const InputForm = ({ onSubmit }: InputFormProps) => {
  const { handleSubmit, register } = useForm<InputFormData>({
    defaultValues: {
      rawUrls: '',
      idOffset: 2,
    },
  });

  return (
    <Form
      legendText={RouteName.URL_DUPLICATES}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col"
    >
      <textarea
        {...register('rawUrls', { required: true })}
        {...TEXTAREA_PROPS}
        className="scrollbar resize-none rounded-sm p-2 text-sm outline-none ring-2 ring-teal-400 focus:ring-teal-500"
      />
      <div className="flex items-center justify-end gap-2 py-2">
        <TextField
          {...register('idOffset')}
          label="id offset:"
          containerClassName="flex items-center gap-2"
          className="w-12"
          type="number"
        />
        <Button>Check</Button>
      </div>
    </Form>
  );
};

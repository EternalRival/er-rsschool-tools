import { getFormDataObject } from '@/shared/lib/get-form-data-object';
import { RouteName } from '@/shared/router';
import { UiButton, UiForm, UiTextField } from '@/shared/ui';

import { parseFormData } from '../model/form-data-schema';

import type { FormData } from '../model/form-data-schema';
import type { ReactNode } from 'react';

type Props = Readonly<{
  handleSubmit: (formData: FormData) => void;
}>;

export function InputForm({ handleSubmit }: Props): ReactNode {
  const urlsName = 'rawUrls';
  const idOffsetName = 'idOffset';

  return (
    <UiForm
      legendText={RouteName.URL_DUPLICATES}
      handleSubmit={(e) => {
        e.preventDefault();

        handleSubmit(parseFormData(getFormDataObject(e.currentTarget)));
      }}
      className="flex flex-col"
    >
      <textarea
        name={urlsName}
        cols={80}
        rows={8}
        className="scrollbar resize-none rounded-sm p-2 text-sm outline-none ring-2 ring-teal-400 focus:ring-teal-500"
        placeholder={[1, 2, 3].map((n) => `https://example.com/${n}`).join('\n')}
      />
      <div className="flex items-center justify-end gap-2 py-2">
        <UiTextField
          label="id offset:"
          containerClassName="flex items-center gap-2"
          className="w-12"
          defaultValue={2}
          name={idOffsetName}
          type="number"
        />
        <UiButton>Check</UiButton>
      </div>
    </UiForm>
  );
}

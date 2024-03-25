import { getFormDataObject } from '@/shared/lib/get-form-data-object';
import { RouteName } from '@/shared/router';
import { StyledForm } from '@/shared/ui/styled-form';

import { parseFormData } from '../model/form-data-schema';

import type { FormData } from '../model/form-data-schema';
import type { ReactNode } from 'react';

type Props = Readonly<{
  handleSubmit: (formData: FormData) => void;
}>;

export function InputForm({ handleSubmit }: Props): ReactNode {
  const urlsId = 'rawUrls';
  const idOffsetId = 'idOffset';

  return (
    <StyledForm
      legendText={RouteName.URL_DUPLICATES}
      handleSubmit={(e) => {
        e.preventDefault();

        handleSubmit(parseFormData(getFormDataObject(e.currentTarget)));
      }}
      className="flex flex-col"
    >
      <textarea
        name={urlsId}
        cols={80}
        rows={8}
        className="scrollbar resize-none rounded-sm p-2 text-sm outline-none ring-2"
      />
      <div className="flex items-center justify-end py-2">
        <label htmlFor={idOffsetId}>id offset:</label>
        <input
          type="number"
          id={idOffsetId}
          name={idOffsetId}
          defaultValue={2}
          className="w-12 justify-self-start"
        />
        <button
          className="ml-2 rounded bg-color3 px-2 py-1 ring-2 hover:bg-color4 active:bg-color3"
          type="submit"
        >
          Check
        </button>
      </div>
    </StyledForm>
  );
}

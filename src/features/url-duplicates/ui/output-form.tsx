import clsx from 'clsx';
import { useEffect } from 'react';

import { RouteName } from '@/shared/router';
import { StyledForm } from '@/shared/ui/styled-form';

import type { Json } from '@/shared/lib/zod';
import type { ReactNode } from 'react';

type Props = Readonly<{
  outputData: Json;
  onClose: () => void;
}>;

export function OutputForm({ outputData, onClose }: Props): ReactNode {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="scroll fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <StyledForm
        legendText={RouteName.URL_DUPLICATES}
        handleSubmit={(e) => {
          e.preventDefault();

          onClose();
        }}
        className="flex flex-col"
      >
        <textarea
          cols={90}
          rows={12}
          className={clsx('scrollbar resize-none rounded-sm p-2 text-sm outline-none ring-2')}
          readOnly
          value={JSON.stringify(outputData, null, 2)}
        />
        <button
          className="col-span-2 mt-2 rounded bg-color3 px-2 py-1 ring-2 hover:bg-color4 active:bg-color3"
          type="submit"
        >
          Close
        </button>
      </StyledForm>
    </div>
  );
}

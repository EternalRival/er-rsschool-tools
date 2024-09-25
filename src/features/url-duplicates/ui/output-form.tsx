import clsx from 'clsx';
import { useEffect } from 'react';

import { RouteName } from '~/shared/router';
import { UiButton, UiForm } from '~/shared/ui';

import type { Json } from '~/shared/lib/zod';

type Props = Readonly<{
  outputData: Json;
  onClose: () => void;
}>;

export const OutputForm = ({ outputData, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="scroll fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <UiForm
        legendText={RouteName.URL_DUPLICATES}
        onSubmit={(e) => {
          e.preventDefault();

          onClose();
        }}
        className="flex flex-col"
      >
        <textarea
          cols={90}
          rows={12}
          className={clsx('scrollbar resize-none rounded-sm p-2 text-sm outline-none ring-2 ring-teal-500')}
          readOnly
          value={JSON.stringify(outputData, null, 2)}
        />
        <UiButton className="mt-2">Close</UiButton>
      </UiForm>
    </div>
  );
};

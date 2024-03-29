import { UiSpinner } from './ui-spinner';

import type { ReactNode } from 'react';

export function UiPageSpinner(): ReactNode {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-teal-100/85">
      <UiSpinner />
    </div>
  );
}

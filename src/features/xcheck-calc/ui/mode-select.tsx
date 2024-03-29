import { UiSelect } from '@/shared/ui';

import type { ChangeEventHandler, ReactNode } from 'react';

type Props = Readonly<{
  onChange: ChangeEventHandler<HTMLSelectElement>;
}>;

export function ModeSelect({ onChange }: Props): ReactNode {
  return (
    <UiSelect
      onChange={onChange}
      selectOptions={[
        { label: 'JSFE', value: 'JSFE' },
        { label: 'NodeJS', value: 'NodeJS' },
      ]}
      containerClassName="contents"
      className="rounded-none border-none bg-color1 text-end shadow shadow-color4 outline-none"
    />
  );
}

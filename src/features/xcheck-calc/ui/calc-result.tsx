import clsx from 'clsx';

import type { ReactNode } from 'react';
import type { Score } from '../model/score.type';

type Props = Readonly<{ score: Score }>;

export function CalcResult({ score }: Props): ReactNode {
  return (
    <p
      className={clsx(
        'bg-color1 p-2 text-center',
        score.isAppealable ? 'shadow-color-valid shadow-sm' : 'shadow shadow-color4'
      )}
    >
      {score.average}
    </p>
  );
}

import clsx from 'clsx';

import type { Score } from '../model/score.type';

type Props = Readonly<{ score: Score }>;

export const CalcResult = ({ score }: Props) => (
  <p
    className={clsx(
      'bg-color1 p-2 text-center',
      score.isAppealable ? 'shadow-color-valid shadow-sm' : 'shadow shadow-color4'
    )}
  >
    {score.average}
  </p>
);

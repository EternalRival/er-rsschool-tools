import { useMemo, useState } from 'react';

import { sumArray } from '@/shared/lib/sum-array';

import { defaultFormData } from '../model/constants';
import { getValuableScores } from './get-valuable-scores';

import type { Dispatch, SetStateAction } from 'react';
import type { FormData } from '../model/form-data.schema';
import type { Mode } from '../model/mode.schema';

type UseXCheckCalcReturn = {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
  inputValues: FormData;
  setInputValues: Dispatch<SetStateAction<FormData>>;
  score: { isAppealable: boolean; average: number };
};

export function useXCheckCalc(): UseXCheckCalcReturn {
  const [mode, setMode] = useState<Mode>('JSFE');
  const [inputValues, setInputValues] = useState<FormData>(defaultFormData);

  const score = useMemo(() => {
    const { max, self, reviewer1, reviewer2, reviewer3, reviewer4 } = inputValues;
    const scoreList = [reviewer1, reviewer2, reviewer3];

    if (mode === 'JSFE') {
      scoreList.push(reviewer4);
    }

    const sortedList = getValuableScores(scoreList);

    const average = Math.round(sumArray(sortedList) / sortedList.length) || 0;

    const isAppealable = self - average >= max * 0.1;

    return { average, isAppealable };
  }, [mode, inputValues]);

  return { mode, setMode, inputValues, setInputValues, score };
}

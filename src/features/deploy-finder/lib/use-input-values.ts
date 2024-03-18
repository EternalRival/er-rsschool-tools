import { deployUrlPartsSchema, type DeployUrlParts } from '@/entities/deploy-urls';
import { LocalStorageKey, useLocalStorage } from '@/shared/lib/local-storage';
import { parseNullable } from '@/shared/lib/zod';
import { useMemo } from 'react';

const parseInputValues = parseNullable(deployUrlPartsSchema);

type SetInputValues = (inputValue: Nullable<DeployUrlParts>) => void;

type UseInputValue = () => {
  parseInputValues: typeof parseInputValues;
  setInputValues: SetInputValues;
} & ({ isFilled: true; inputValues: DeployUrlParts } | { isFilled: false; inputValues: Nullable<DeployUrlParts> });

export const useInputValues: UseInputValue = () => {
  const [rawInputValues, setRawInputValues] = useLocalStorage(LocalStorageKey.DEPLOY_FINDER);

  const setInputValues: SetInputValues = (value) =>
    void setRawInputValues(value && Object.values(value).some(Boolean) ? value : null);

  const inputValuesObject = useMemo(() => {
    const inputValues = parseInputValues(rawInputValues);

    if (inputValues === null) {
      return { isFilled: false, inputValues: null } as const;
    }

    return { isFilled: Object.values(inputValues).every(Boolean), inputValues };
  }, [rawInputValues]);

  return { parseInputValues, setInputValues, ...inputValuesObject };
};

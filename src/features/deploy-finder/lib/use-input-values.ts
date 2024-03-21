import { useMemo } from 'react';

import { LocalStorageKey, useLocalStorage } from '@/shared/lib/local-storage';
import { parseDeployUrlParts } from '@/entities/deploy-urls';

import type { DeployUrlParts } from '@/entities/deploy-urls';

type SetInputValues = (inputValue: DeployUrlParts) => void;

type UseInputValues = () => {
  setInputValues: SetInputValues;
  isFilled: boolean;
  inputValues: DeployUrlParts;
};

export const useInputValues: UseInputValues = () => {
  const [rawInputValues, setRawInputValues] = useLocalStorage(LocalStorageKey.DEPLOY_FINDER);

  const setInputValues: SetInputValues = (value) =>
    void setRawInputValues(Object.values(value).some(Boolean) ? value : null);

  const { inputValues, isFilled } = useMemo(() => {
    const deployUrlParts = parseDeployUrlParts(rawInputValues);

    return { isFilled: Object.values(deployUrlParts).every(Boolean), inputValues: deployUrlParts };
  }, [rawInputValues]);

  return { inputValues, isFilled, setInputValues };
};

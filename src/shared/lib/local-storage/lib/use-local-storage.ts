import { useEffect, useState } from 'react';

import { wrappedLS } from '../model/wrapped-ls';

import type { Json } from '@/shared/lib/zod';
import type { LocalStorageKey } from '../model/local-storage-key.enum';

type UseLocalStorage = (key: LocalStorageKey) => [Json, (value: Json) => void];

export const useLocalStorage: UseLocalStorage = (key) => {
  const [state, setState] = useState<Json>(null);

  const updateState = (value: Json): void => {
    if (value === null) {
      wrappedLS.remove(key);
    } else {
      wrappedLS.set(key, value);
    }

    setState(value);
  };

  useEffect(() => {
    setState(wrappedLS.get(key));
  }, [key]);

  return [state, updateState];
};

import type { Json } from '@/shared/zod';
import { useEffect, useState } from 'react';
import { wrappedLS } from './wrapped-local-storage';

type UseLocalStorage = (key: string) => [Json, (value: Json) => void];

const useLocalStorage: UseLocalStorage = (key) => {
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

export { useLocalStorage };

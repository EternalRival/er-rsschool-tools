import { parseStringToJson } from '@/shared/lib/zod';

import { LocalStorageKey } from './local-storage-key.enum';

import type { Json } from '@/shared/lib/zod';

const wrapKey = (key: LocalStorageKey): string => `${LocalStorageKey.PREFIX}${key}`;

type WrappedLS = {
  get: (key: LocalStorageKey) => Json;
  set: (key: LocalStorageKey, data: Json) => void;
  remove: (key: LocalStorageKey) => void;
};

export const wrappedLS: WrappedLS = {
  get: (key) => parseStringToJson(window.localStorage.getItem(wrapKey(key))),
  set: (key, data) => void window.localStorage.setItem(wrapKey(key), JSON.stringify(data)),
  remove: (key) => void window.localStorage.removeItem(wrapKey(key)),
};

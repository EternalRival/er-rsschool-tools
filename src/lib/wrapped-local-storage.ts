import { parseNullable, stringToJsonSchema } from '@/shared/zod';
import type { Json } from '@/shared/zod';

const PREFIX = '[rsschool-tools]';
const wrapKey = (key: string): string => `${PREFIX}${key}`;

type WrappedLS = {
  get: (key: string) => Json;
  set: (key: string, data: Json) => void;
  remove: (key: string) => void;
};

const wrappedLS: WrappedLS = {
  get: (key) => parseNullable(stringToJsonSchema, window.localStorage.getItem(wrapKey(key))),
  set: (key, data) => void window.localStorage.setItem(wrapKey(key), JSON.stringify(data)),
  remove: (key) => void window.localStorage.removeItem(wrapKey(key)),
};

export { wrappedLS };

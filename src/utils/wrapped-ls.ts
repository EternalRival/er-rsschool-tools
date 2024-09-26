import { parseStringToJson } from '~/lib/zod/string-to-json.schema';

import type { Json } from '~/lib/zod/json.schema';

export const enum LocalStorageKey {
  PREFIX = '[rsschool-tools]',
  DEPLOY_FINDER = 'deploy-finder',
}

function wrapKey(key: LocalStorageKey): string {
  return `${LocalStorageKey.PREFIX}${key}`;
}

type WrappedLS = {
  get: (key: LocalStorageKey) => Json;
  set: (key: LocalStorageKey, data: Json) => void;
  remove: (key: LocalStorageKey) => void;
};

export const wrappedLS = {
  get(key) {
    return parseStringToJson(window.localStorage.getItem(wrapKey(key)));
  },

  set(key, data) {
    window.localStorage.setItem(wrapKey(key), JSON.stringify(data));
  },

  remove(key) {
    window.localStorage.removeItem(wrapKey(key));
  },
} satisfies WrappedLS;

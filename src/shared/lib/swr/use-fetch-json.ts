import useSWR from 'swr';

import { parseJson } from '@/shared/lib/zod';

import type { Json } from '@/shared/lib/zod';
import type { SWRResponse } from 'swr';

function fetcher(...args: Parameters<typeof fetch>): Promise<Json> {
  return fetch(...args)
    .then((res) => res.json())
    .then(parseJson);
}

export function useFetchJson(key: string, params?: Record<string, string>): SWRResponse<Json> {
  let endpoint = key;

  if (params) {
    endpoint += `?${new URLSearchParams(params).toString()}`;
  }

  return useSWR(endpoint, fetcher);
}

import useSWR from 'swr';

import { jsonSchema } from '@/shared/lib/zod';

import type { SWRResponse } from 'swr';
import type { Json } from '@/shared/lib/zod';

const fetcher = (...args: Parameters<typeof fetch>): Promise<Json> =>
  fetch(...args)
    .then((res) => res.json())
    .then((json) => jsonSchema.parse(json));

export const useFetchJson = (key: string, params?: Record<string, string>): SWRResponse<Json> => {
  let endpoint = key;

  if (params) {
    endpoint += `?${new URLSearchParams(params).toString()}`;
  }

  return useSWR(endpoint, fetcher);
};

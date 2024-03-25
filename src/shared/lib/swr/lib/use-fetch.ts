import useSWR from 'swr';

import { httpClient } from '@/shared/lib/http-client';

import type { Json } from '@/shared/lib/zod';
import type { SWRResponse } from 'swr';

type Args = Parameters<typeof httpClient.fetch>;

function fetcher([url, options]: Args): Promise<Json> {
  return httpClient.fetch(url, options);
}

export function useFetch(...args: Args): SWRResponse<Json> {
  return useSWR(args, fetcher);
}

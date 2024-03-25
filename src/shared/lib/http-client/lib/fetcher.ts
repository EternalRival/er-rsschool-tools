import { parseJson } from '@/shared/lib/zod';

import { buildBody } from './build-body';
import { buildHeaders } from './build-headers';
import { buildUrl } from './build-url';

import type { Json } from '@/shared/lib/zod';
import type { FetcherOptions } from '../model/fetcher-options.type';

export function fetcher(url: string, init?: FetcherOptions): Promise<Json> {
  const method = init?.method ?? 'GET';
  const endpoint = buildUrl(url, init?.params);
  const headers = buildHeaders(method, init?.headers);
  const body = buildBody(method, init?.body);

  return fetch(endpoint, { ...init, headers, body })
    .then((res) => res.json())
    .then(parseJson);
}

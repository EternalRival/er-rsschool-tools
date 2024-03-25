import { parseUrl } from '@/shared/lib/parse-url';

import { getParamsTuples } from './get-params-tuples';

import type { Params } from '../model/fetcher-options.type';

export function buildUrl(url: string, params?: Params): string {
  if (!params) {
    return url;
  }

  const { baseUrl, search } = parseUrl(url);

  const searchParams = new URLSearchParams(search);

  const paramsTuples = getParamsTuples(params);

  paramsTuples.forEach((param) => void searchParams.append(...param));

  return `${baseUrl}?${searchParams.toString()}`;
}

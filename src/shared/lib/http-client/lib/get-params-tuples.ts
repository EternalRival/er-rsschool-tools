import type { Params } from '../model/fetcher-options.type';

export function getParamsTuples(params: Params): [string, string][] {
  return Object.entries(params).reduce<[string, string][]>((acc, [key, values]) => {
    if (Array.isArray(values)) {
      return [...acc, ...values.map<[string, string]>((value) => [key, value])];
    }

    return [...acc, [key, values]];
  }, []);
}

import type { Headers, Method } from '../model/fetcher-options.type';

export function buildHeaders(method: Method, headers?: Headers): Dict {
  const isCorrectMethod = ['POST', 'PUT', 'PATCH'].includes(method);
  const defaultHeaders: Headers = isCorrectMethod ? { 'Content-Type': 'application/json' } : {};

  return { ...defaultHeaders, ...headers };
}

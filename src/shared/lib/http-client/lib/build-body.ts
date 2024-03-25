import type { Body, Method } from '../model/fetcher-options.type';

export function buildBody(method: Method, body?: Body): Nullable<string> {
  if (body && ['POST', 'PUT', 'PATCH'].includes(method)) {
    return JSON.stringify(body);
  }

  return null;
}

import { fetcher } from '../lib/fetcher';

import type { Json } from '@/shared/lib/zod';
import type { FetcherOptions } from './fetcher-options.type';

type HttpClientOptions = Omit<FetcherOptions, 'method'>;

export const httpClient = {
  fetch: (url: string, options?: FetcherOptions): Promise<Json> => fetcher(url, options),

  get(url: string, options?: HttpClientOptions): Promise<Json> {
    return this.fetch(url, { method: 'GET', ...options });
  },

  post(url: string, options?: HttpClientOptions): Promise<Json> {
    return this.fetch(url, { method: 'POST', ...options });
  },

  put(url: string, options?: HttpClientOptions): Promise<Json> {
    return this.fetch(url, { method: 'PUT', ...options });
  },

  patch(url: string, options?: HttpClientOptions): Promise<Json> {
    return this.fetch(url, { method: 'PATCH', ...options });
  },

  delete(url: string, options?: HttpClientOptions): Promise<Json> {
    return this.fetch(url, { method: 'DELETE', ...options });
  },
};

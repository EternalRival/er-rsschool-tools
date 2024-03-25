import type { Json } from '@/shared/lib/zod';

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type Params = Dict<string | string[]>;

export type Headers = Dict;

export type Body = Json;

export type FetcherOptions = Omit<RequestInit, 'headers' | 'body' | 'method'> & {
  method?: Method;
  params?: Params;
  headers?: Headers;
  body?: Body;
};

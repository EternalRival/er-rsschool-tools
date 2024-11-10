import { z } from 'zod';

export const requestParamsSchema = z.object({
  sort: z.enum(['receivers', 'senders']).default('receivers'),
  q: z.string().default(''),
});

export type RequestParams = z.infer<typeof requestParamsSchema>;

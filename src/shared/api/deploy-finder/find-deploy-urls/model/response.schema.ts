import { z } from 'zod';

import { buildResponseSchema } from '~/shared/lib/zod';

const responseDataSchema = z.array(z.string());

const responseSchema = buildResponseSchema(responseDataSchema);

export type ApiResponse = z.infer<typeof responseSchema>;

export function parseApiResponse(value: unknown): Nullable<ApiResponse> {
  return responseSchema.nullable().catch(null).parse(value);
}

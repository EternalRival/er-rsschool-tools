import { z } from 'zod';

const okResponseSchema = z.object({
  success: z.literal(true),
  data: z.array(z.string()),
});
const errorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
});

const responseSchema = okResponseSchema.or(errorResponseSchema);

export type ApiResponse = z.infer<typeof responseSchema>;

export const parseApiResponse = (value: unknown): Nullable<ApiResponse> =>
  responseSchema.nullable().catch(null).parse(value);

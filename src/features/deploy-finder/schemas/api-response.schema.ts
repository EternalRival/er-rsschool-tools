import { z } from 'zod';

export const apiResponseSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.array(z.string()),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export type ApiResponse = z.infer<typeof apiResponseSchema>;

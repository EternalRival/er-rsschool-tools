import { z } from 'zod';

export const responseSchema = z
  .object({
    success: z.literal(true),
    deployUrls: z.array(z.string()),
  })
  .or(
    z.object({
      success: z.literal(false),
      reason: z.string(),
    })
  );

export type ApiResponse = z.infer<typeof responseSchema>;

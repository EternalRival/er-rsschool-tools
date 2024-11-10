import { z } from 'zod';

const contributorSchema = z.object({
  list: z.array(z.object({ github: z.string(), count: z.number() })),
  count: z.number(),
});

const studentSchema = z.object({
  github: z.string(),
  receivers: contributorSchema,
  senders: contributorSchema,
});

export const apiResponseSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.array(studentSchema),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export type ApiResponse = z.infer<typeof apiResponseSchema>;

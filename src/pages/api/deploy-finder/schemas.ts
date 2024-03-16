import { z } from 'zod';

const nonEmptyStringSchema = z
  .string()
  .trim()
  .regex(/^[\w-]+$/);

export const requestSchema = z.object({
  nickname: nonEmptyStringSchema,
  course: nonEmptyStringSchema,
  task: nonEmptyStringSchema,
});

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

export type ApiRequest = z.infer<typeof requestSchema>;
export type ApiResponse = z.infer<typeof responseSchema>;

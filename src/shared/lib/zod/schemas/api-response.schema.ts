import { z } from 'zod';

const errorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
});

const okResponseSchema = z.object({
  success: z.literal(true),
  data: z.null(),
});

type ErrorResponseSchema = typeof errorResponseSchema;

type OkResponseSchemaExtended<T extends z.ZodTypeAny> = ReturnType<typeof okResponseSchema.extend<{ data: T }>>;

export function buildResponseSchema<T extends z.ZodTypeAny>(
  dataSchema: T
): z.ZodUnion<[ErrorResponseSchema, OkResponseSchemaExtended<T>]> {
  return errorResponseSchema.or(okResponseSchema.extend({ data: dataSchema }));
}

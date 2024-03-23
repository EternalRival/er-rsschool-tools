import { z } from 'zod';

const nonEmptyStringSchema = z
  .string()
  .trim()
  .regex(/^[\w-]+$/);

const requestSchema = z.object({
  nickname: nonEmptyStringSchema,
  course: nonEmptyStringSchema,
  task: nonEmptyStringSchema,
});

export type ApiRequest = z.infer<typeof requestSchema>;

export function parseApiRequest(value: unknown): Nullable<ApiRequest> {
  return requestSchema.nullable().catch(null).parse(value);
}

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

export type ApiRequest = z.infer<typeof requestSchema>;

import { z } from 'zod';

const formDataFieldSchema = z.string().trim().regex(/^\S+$/);

export const formDataSchema = z.object({
  nickname: formDataFieldSchema.toLowerCase(),
  course: formDataFieldSchema.toUpperCase(),
  task: formDataFieldSchema.toLowerCase(),
});

export type FormData = z.infer<typeof formDataSchema>;

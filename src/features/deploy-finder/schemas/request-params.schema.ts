import { z } from 'zod';

export const requestParamsSchema = z.object({
  nickname: z.string(),
  course: z.string(),
  task: z.string(),
});

export type RequestParams = z.infer<typeof requestParamsSchema>;

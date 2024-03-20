import { z } from 'zod';

export const deployUrlPartsSchema = z.object({
  nickname: z.string().toLowerCase(),
  course: z.string().toUpperCase(),
  task: z.string().toLowerCase(),
});

export type DeployUrlParts = z.input<typeof deployUrlPartsSchema>;

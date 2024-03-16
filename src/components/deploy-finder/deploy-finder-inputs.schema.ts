import { z } from 'zod';

export const deployFinderInputsSchema = z.object({
  nickname: z.string().toLowerCase(),
  course: z.string().toUpperCase(),
  task: z.string().toLowerCase(),
});

export type DeployFinderInputs = z.infer<typeof deployFinderInputsSchema>;

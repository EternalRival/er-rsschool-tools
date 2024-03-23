import { z } from 'zod';

const defaultDeployUrlParts = { nickname: '', course: '', task: '' };

const deployUrlPartsSchema = z.object({
  nickname: z.string().toLowerCase(),
  course: z.string().toUpperCase(),
  task: z.string().toLowerCase(),
});

export type DeployUrlParts = z.infer<typeof deployUrlPartsSchema>;

export function parseDeployUrlParts(value: unknown): DeployUrlParts {
  return deployUrlPartsSchema.catch(defaultDeployUrlParts).parse(value);
}

export function parseDeployUrlPartsKey(value: unknown): Nullable<keyof DeployUrlParts> {
  return deployUrlPartsSchema.keyof().nullable().catch(null).parse(value);
}

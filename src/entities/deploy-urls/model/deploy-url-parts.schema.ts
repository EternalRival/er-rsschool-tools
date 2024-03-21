import { z } from 'zod';

const defaultDeployUrlParts = { nickname: '', course: '', task: '' };

const deployUrlPartsSchema = z.object({
  nickname: z.string().toLowerCase(),
  course: z.string().toUpperCase(),
  task: z.string().toLowerCase(),
});

export type DeployUrlParts = z.infer<typeof deployUrlPartsSchema>;

export const parseDeployUrlParts = (value: unknown): DeployUrlParts =>
  deployUrlPartsSchema.catch(defaultDeployUrlParts).parse(value);

export const parseDeployUrlPartsKey = (value: unknown): Nullable<keyof DeployUrlParts> =>
  deployUrlPartsSchema.keyof().nullable().catch(null).parse(value);

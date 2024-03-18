import { responseSchema } from '@/shared/api/deploy-finder';
import { parseNullable } from '@/shared/lib/zod';

export const parseDeployUrls = (data: unknown): Nullable<string[]> => {
  const res = parseNullable(responseSchema, data);

  return res?.success ? res.deployUrls : null;
};

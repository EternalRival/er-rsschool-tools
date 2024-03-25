import { z } from 'zod';

import { defaultFormData } from './constants';

const coerceNumberSchema = z.coerce.number();
const reviewerScoreSchema = z.string();

const formDataSchema = z.object({
  max: coerceNumberSchema,
  self: coerceNumberSchema,
  reviewer1: reviewerScoreSchema,
  reviewer2: reviewerScoreSchema,
  reviewer3: reviewerScoreSchema,
  reviewer4: reviewerScoreSchema,
});

export type FormData = z.infer<typeof formDataSchema>;

export function parseFormData(value: unknown): FormData {
  return formDataSchema.catch(defaultFormData).parse(value);
}

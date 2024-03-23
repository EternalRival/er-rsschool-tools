import { z } from 'zod';

import { defaultInputValues } from './constants';

const coerceNumberSchema = z.coerce.number();
const reviewerScoreSchema = z.string();

const inputValuesSchema = z.object({
  max: coerceNumberSchema,
  self: coerceNumberSchema,
  reviewer1: reviewerScoreSchema,
  reviewer2: reviewerScoreSchema,
  reviewer3: reviewerScoreSchema,
  reviewer4: reviewerScoreSchema,
});

export type InputValues = z.infer<typeof inputValuesSchema>;

export function parseInputValues(value: unknown): InputValues {
  return inputValuesSchema.catch(defaultInputValues).parse(value);
}

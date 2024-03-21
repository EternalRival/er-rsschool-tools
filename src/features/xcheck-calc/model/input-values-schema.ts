import { z } from 'zod';

const defaultInputValues = { max: 100, self: 0, reviewer1: '', reviewer2: '', reviewer3: '', reviewer4: '' };

const coerceNumberSchema = z.coerce.number();
const reviewerScoreSchema = z.string().default('');

const inputValuesSchema = z.object({
  max: coerceNumberSchema,
  self: coerceNumberSchema,
  reviewer1: reviewerScoreSchema,
  reviewer2: reviewerScoreSchema,
  reviewer3: reviewerScoreSchema,
  reviewer4: reviewerScoreSchema,
});

export type InputValues = z.infer<typeof inputValuesSchema>;

export const parseInputValues = (value: unknown): InputValues =>
  inputValuesSchema.catch(defaultInputValues).parse(value);

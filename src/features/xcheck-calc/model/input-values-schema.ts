import { z } from 'zod';

import { parseNullable } from '@/shared/lib/zod';

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

export type InputValues = z.input<typeof inputValuesSchema>;

export const parseInputValues = (value: unknown): InputValues =>
  parseNullable(inputValuesSchema, value) ?? { max: 100, self: 0 };

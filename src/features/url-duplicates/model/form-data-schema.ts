import { z } from 'zod';

import { defaultFormData } from './constants';

const formDataSchema = z.object({
  rawUrls: z.string(),
  idOffset: z.coerce.number(),
});

export type FormData = z.infer<typeof formDataSchema>;

export function parseFormData(value: unknown): FormData {
  return formDataSchema.catch(defaultFormData).parse(value);
}

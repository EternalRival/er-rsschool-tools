import { z } from 'zod';

import { parseJson } from './json.schema';

import type { Json } from './json.schema';

const stringToJsonSchema = z.string().transform((str): Json => {
  try {
    return parseJson(JSON.parse(str));
  } catch {
    return null;
  }
});

export function parseStringToJson(value: unknown): Json {
  return stringToJsonSchema.catch(null).parse(value);
}

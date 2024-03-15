import type { z } from 'zod';

type ParseNullable = <T>(s: z.ZodType<T>, v?: unknown) => ((value: unknown) => T | null) | (T | null);
type ParseNullableOverloaded = {
  <T>(schema: z.ZodType<T>): (value: unknown) => T | null;
  <T>(schema: z.ZodType<T>, value: unknown): T | null;
};

const parseNullableFn: ParseNullableOverloaded = (schema) => (value) => {
  try {
    return schema.parse(value);
  } catch {
    return null;
  }
};

const parseNullableRaw: ParseNullable = (s, v) =>
  typeof v === 'undefined' ? parseNullableFn(s) : parseNullableFn(s)(v);

const parseNullable: ParseNullableOverloaded = parseNullableRaw;

export { parseNullable };

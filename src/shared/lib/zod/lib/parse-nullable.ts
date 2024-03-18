import type { z } from 'zod';

type ParseNullable = <T>(s: z.ZodType<T>, v?: unknown) => ((value: unknown) => Nullable<T>) | Nullable<T>;

type ParseNullableOverloaded = {
  <T>(schema: z.ZodType<T>): (value: unknown) => Nullable<T>;
  <T>(schema: z.ZodType<T>, value: unknown): Nullable<T>;
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

export const parseNullable: ParseNullableOverloaded = parseNullableRaw;

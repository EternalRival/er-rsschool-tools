import { z } from 'zod';

const modeSchema = z.enum(['JSFE', 'NodeJS']);

export type Mode = z.infer<typeof modeSchema>;

export function parseMode(value: unknown): Mode {
  return modeSchema.catch('JSFE').parse(value);
}

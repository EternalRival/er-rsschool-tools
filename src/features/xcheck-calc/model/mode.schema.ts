import { z } from 'zod';

const modeSchema = z.enum(['JSFE', 'NodeJS']);

export type Mode = z.input<typeof modeSchema>;

export const parseMode = (value: unknown): Mode => modeSchema.catch('JSFE').parse(value);

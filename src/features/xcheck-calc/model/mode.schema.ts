import { z } from 'zod';

import { parseNullable } from '@/shared/lib/zod';

const modeSchema = z.enum(['JSFE', 'NodeJS']);

export type Mode = z.input<typeof modeSchema>;

export const parseMode = (value: unknown): Mode => parseNullable(modeSchema, value) ?? 'JSFE';

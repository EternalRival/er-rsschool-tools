import { z } from 'zod';

export const formFieldPropsSchema = z.object({
  label: z.string(),
  name: z.string(),
  value: z.string().optional(),
});

export type FormFieldProps = z.infer<typeof formFieldPropsSchema>;

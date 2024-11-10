import { z } from 'zod';

export const apiResponseRawSchema = z.object({
  content: z.array(
    z.object({
      // id: z.number(),
      // comment: z.string().nullable(),
      // badgeId: z.string(),
      // date: z.string().datetime(),
      // user_id: z.number(),
      githubId: z.string(),
      // firstName: z.string(),
      // lastName: z.string().nullable(),
      // countryName: z.string().nullable(),
      // cityName: z.string().nullable(),
      // activist: z.boolean().nullable(),
      from: z.object({
        githubId: z.string(),
        // firstName: z.string(),
        // lastName: z.string(),
      }),
    })
  ),
  count: z.string(),
});

export type ApiResponseRaw = z.infer<typeof apiResponseRawSchema>;

import { requestParamsSchema } from '~/features/gratitude-summary/schemas/request-params.schema';
import getGratitudesSummary from '~/features/gratitude-summary/utils/get-gratitudes-summary';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { ApiResponse } from '~/features/gratitude-summary/schemas/api-response.schema';

export default async function handleRequest(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  try {
    const parsedParams = requestParamsSchema.parse(req.query);

    const data = await getGratitudesSummary(parsedParams);

    res.json({ success: true, data });
  } catch {
    res.status(400).json({ success: false, error: 'Bad request' });
  }
}

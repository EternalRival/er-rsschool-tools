import { requestParamsSchema } from '~/features/deploy-finder/schemas/request-params.schema';
import { findDeployUrls } from '~/features/deploy-finder/utils/find-deploy-urls';

import type { ApiResponse } from '~/features/deploy-finder/schemas/api-response.schema';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handleRequest(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  try {
    const parsedParams = requestParamsSchema.parse(req.query);

    const data = await findDeployUrls(parsedParams);

    res.json({ success: true, data });
  } catch {
    res.status(400).json({ success: false, error: 'Bad request' });
  }
}

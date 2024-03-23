import { findDeployUrls, parseApiRequest } from '@/shared/api/deploy-finder';

import type { ApiResponse } from '@/shared/api/deploy-finder';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  const parsedParams = parseApiRequest(req.query);

  if (parsedParams) {
    const data = await findDeployUrls(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(400).json({ success: false, error: 'Bad request' });
  }
}

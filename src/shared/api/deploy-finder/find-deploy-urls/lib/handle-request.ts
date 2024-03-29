import { parseApiRequest } from '../model/request.schema';
import { findDeployUrls } from './fetch-deploy-url';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { ApiResponse } from '../model/response.schema';

export async function handleRequest(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  const parsedParams = parseApiRequest(req.query);

  if (parsedParams) {
    const data = await findDeployUrls(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(400).json({ success: false, error: 'Bad request' });
  }
}

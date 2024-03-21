import { findDeployUrls, parseApiRequest } from '@/shared/api/deploy-finder';

import type { ApiResponse } from '@/shared/api/deploy-finder';
import type { NextApiHandler } from 'next';

const handler: NextApiHandler<ApiResponse> = async (req, res) => {
  const parsedParams = parseApiRequest(req.query);

  if (parsedParams) {
    const data = await findDeployUrls(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(400).json({ success: false, error: 'Bad request' });
  }
};

export default handler;

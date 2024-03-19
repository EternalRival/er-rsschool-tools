import { findDeployUrls, requestSchema } from '@/shared/api/deploy-finder';

import type { ApiResponse } from '@/shared/api/deploy-finder';
import type { NextApiHandler } from 'next';

const handler: NextApiHandler<ApiResponse> = async ({ query }, res) => {
  try {
    const deployUrls = await findDeployUrls(requestSchema.parse(query));

    res.json({ success: true, deployUrls });
  } catch {
    res.status(400).json({ success: false, reason: 'Bad request' });
  }
};

export default handler;

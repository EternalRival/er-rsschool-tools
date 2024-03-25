import { findUrlDuplicates, parseApiRequest } from '@/shared/api/url-duplicates';

import type { ApiResponse } from '@/shared/api/url-duplicates';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>): void {
  const parsedParams = parseApiRequest(req.body);

  if (parsedParams?.rawUrls) {
    const data = findUrlDuplicates(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(400).json({ success: false, error: 'Bad request' });
  }
}

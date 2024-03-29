import { parseApiRequest } from '../model/request.schema';
import { findUrlDuplicates } from './find-url-duplicates';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { ApiResponse } from '../model/response.schema';

export function handleRequest(req: NextApiRequest, res: NextApiResponse<ApiResponse>): void {
  const parsedParams = parseApiRequest(req.body);

  if (parsedParams?.rawUrls) {
    const data = findUrlDuplicates(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(400).json({ success: false, error: 'Bad request' });
  }
}

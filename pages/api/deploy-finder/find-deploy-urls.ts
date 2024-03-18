import type { ApiResponse } from '@/shared/api/deploy-finder';
import {
  REVALIDATE_IN_MINUTES,
  buildBaseDeployUrl,
  buildSuggestedUrls,
  filterDeployUrls,
  parseOkUrl,
  requestSchema,
} from '@/shared/api/deploy-finder';
import type { NextApiHandler } from 'next';

const handler: NextApiHandler<ApiResponse> = async ({ query }, res) => {
  try {
    const { nickname, course, task } = requestSchema.parse(query);

    const fetchDeployUrl = (url: string): Promise<Nullable<string>> =>
      fetch(url, { next: { revalidate: REVALIDATE_IN_MINUTES * 60 } }).then(parseOkUrl);

    const deployUrlPromises = buildSuggestedUrls(buildBaseDeployUrl(nickname, course, task)).map(fetchDeployUrl);

    const deployUrls = await Promise.all(deployUrlPromises).then(filterDeployUrls);

    res.json({ success: true, deployUrls });
  } catch {
    res.status(400).json({ success: false, reason: 'Bad request' });
  }
};

export default handler;

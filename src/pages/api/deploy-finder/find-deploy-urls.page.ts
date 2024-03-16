import { isString } from '@/shared/type-guards/is-string';
import type { NextApiHandler } from 'next';
import { requestSchema, type ApiResponse } from './schemas';

const BASE_URL = 'https://rolling-scopes-school.github.io/';
const SUGGESTED_DIRS = ['', '/pages', '/pages/main', '/pages/home'];
const SUGGESTED_FILES = ['', '/home.html', '/main.html'];

const handler: NextApiHandler<ApiResponse> = async ({ query }, res) => {
  try {
    const { nickname, course, task } = requestSchema.parse(query);
    const baseDeployUrl = `${BASE_URL}${nickname}-${course}/${task}`;

    const suggestedUrlResponses = SUGGESTED_DIRS.flatMap((dir) =>
      SUGGESTED_FILES.map((file) => fetch(`${baseDeployUrl}${dir}${file}`).then(({ ok, url }) => ok && url))
    );

    const awaitedResponses = await Promise.all(suggestedUrlResponses);

    const deployUrls = awaitedResponses.filter(isString);

    res.json({ success: true, deployUrls });
  } catch {
    res.status(400).json({ success: false, reason: 'Bad request' });
  }
};

export default handler;

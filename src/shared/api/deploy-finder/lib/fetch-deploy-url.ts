import { BASE_URL, REVALIDATE_IN_MINUTES, SUGGESTED_DIRS, SUGGESTED_FILES } from '../model/constants';

import type { ApiRequest } from '../model/request.schema';

const fetchOptions = { next: { revalidate: REVALIDATE_IN_MINUTES * 60 } };

function buildBaseUrl({ course, nickname, task }: ApiRequest): string {
  return `${BASE_URL}${nickname}-${course}/${task}`;
}

function buildSuggestedUrls(base: string): string[] {
  return SUGGESTED_DIRS.flatMap((dir) => SUGGESTED_FILES.map((file) => `${base}${dir}${file}`));
}

function mapUrlsToFetches(urls: string[]): Promise<Response>[] {
  return urls.map((url) => fetch(url, fetchOptions));
}

function parseOkUrls(responses: Response[]): string[] {
  return responses.reduce<string[]>((acc, { ok, url }) => (ok ? [...acc, url] : acc), []);
}

export async function findDeployUrls(deployData: ApiRequest): Promise<string[]> {
  return parseOkUrls(await Promise.all(mapUrlsToFetches(buildSuggestedUrls(buildBaseUrl(deployData)))));
}

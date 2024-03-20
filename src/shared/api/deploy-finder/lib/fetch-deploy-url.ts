import { BASE_URL, REVALIDATE_IN_MINUTES, SUGGESTED_DIRS, SUGGESTED_FILES } from '../model/constants';

import type { ApiRequest } from '../model/request.schema';

const fetchOptions = { next: { revalidate: REVALIDATE_IN_MINUTES * 60 } };

const buildBaseUrl = ({ course, nickname, task }: ApiRequest): string => `${BASE_URL}${nickname}-${course}/${task}`;

const buildSuggestedUrls = (base: string): string[] =>
  SUGGESTED_DIRS.flatMap((dir) => SUGGESTED_FILES.map((file) => `${base}${dir}${file}`));

const mapUrlsToFetches = (urls: string[]): Promise<Response>[] => urls.map((url) => fetch(url, fetchOptions));

const parseOkUrls = (responses: Response[]): string[] =>
  responses.reduce<string[]>((acc, { ok, url }) => (ok ? [...acc, url] : acc), []);

export const findDeployUrls = async (deployData: ApiRequest): Promise<string[]> =>
  parseOkUrls(await Promise.all(mapUrlsToFetches(buildSuggestedUrls(buildBaseUrl(deployData)))));

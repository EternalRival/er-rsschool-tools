import { isString } from '@/shared/lib/type-guards';

import { BASE_URL, REVALIDATE_IN_MINUTES, SUGGESTED_DIRS, SUGGESTED_FILES } from '../model/constants';

import type { ApiRequest } from '../model/request.schema';

const fetchOptions = { next: { revalidate: REVALIDATE_IN_MINUTES * 60 } };

const buildBaseUrl = ({ course, nickname, task }: ApiRequest): string => `${BASE_URL}${nickname}-${course}/${task}`;

const fetchOkUrl = (url: string): Promise<Nullable<string>> =>
  fetch(url, fetchOptions).then(({ ok }) => (ok ? url : null));

const fetchSuggestedUrls = (base: string): Promise<Nullable<string>>[] =>
  SUGGESTED_DIRS.flatMap((dir) => SUGGESTED_FILES.map((file) => fetchOkUrl(`${base}${dir}${file}`)));

const filterOkUrls = (urls: Nullable<string>[]): string[] => urls.filter(isString);

export const findDeployUrls = (deployData: ApiRequest): Promise<string[]> =>
  Promise.all(fetchSuggestedUrls(buildBaseUrl(deployData))).then(filterOkUrls);

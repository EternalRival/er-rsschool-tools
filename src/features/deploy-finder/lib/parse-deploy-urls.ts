import { parseApiResponse } from '~/shared/api/deploy-finder/find-deploy-urls';

export function parseDeployUrls(data: unknown): Nullable<string[]> {
  const response = parseApiResponse(data);

  return response?.success ? response.data : null;
}

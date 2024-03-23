import { parseApiResponse } from '@/shared/api/deploy-finder';

export function parseDeployUrls(data: unknown): Nullable<string[]> {
  const response = parseApiResponse(data);

  return response?.success ? response.data : null;
}

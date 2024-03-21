import { parseApiResponse } from '@/shared/api/deploy-finder';

export const parseDeployUrls = (data: unknown): Nullable<string[]> => {
  const response = parseApiResponse(data);

  return response?.success ? response.data : null;
};

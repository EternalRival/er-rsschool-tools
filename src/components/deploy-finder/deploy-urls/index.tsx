import { responseSchema } from '@/pages/api/deploy-finder/schemas';
import { useFetchJson } from '@/shared/swr/use-fetch-json';
import { parseNullable } from '@/shared/zod';
import type { FC } from 'react';
import type { DeployFinderInputs } from '../deploy-finder-inputs.schema';

const API_URL_GET_SUGGESTIONS = '/api/deploy-finder/find-deploy-urls';

const getDeployUrls = (data: unknown): string[] | null => {
  const res = parseNullable(responseSchema, data);
  return res?.success ? res.deployUrls : null;
};

export const DeployUrls: FC<DeployFinderInputs> = (props) => {
  const { data, isLoading } = useFetchJson(API_URL_GET_SUGGESTIONS, props);

  if (isLoading) {
    return <span className="p-2">Fetching…</span>;
  }

  const deployUrls = getDeployUrls(data);
  const hasUrls = deployUrls && deployUrls.length > 0;

  return hasUrls ? (
    <ul className="p-2">
      {deployUrls.map((url) => (
        <li key={url}>
          <a
            href={url}
            target="_blank"
            className="text-blue underline"
          >
            {url}
          </a>
        </li>
      ))}
    </ul>
  ) : (
    <span className="p-2">Not Found</span>
  );
};

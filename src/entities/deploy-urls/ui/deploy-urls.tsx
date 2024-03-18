import { Route } from '@/shared/router';
import { useFetchJson } from '@/shared/lib/swr/use-fetch-json';

import { parseDeployUrls } from '../lib/parse-deploy-urls';

import type { FC } from 'react';
import type { DeployUrlParts } from '../model/deploy-url-parts.schema';

export const DeployUrls: FC<DeployUrlParts> = (props) => {
  const apiUrl = `${Route.DEPLOY_FINDER_API}/find-deploy-urls`;
  const { data, isLoading } = useFetchJson(apiUrl, props);

  if (isLoading) {
    return <span className="p-2">Fetching…</span>;
  }

  const deployUrls = parseDeployUrls(data);
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

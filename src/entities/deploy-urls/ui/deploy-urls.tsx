import { Route } from '@/shared/router';
import { useFetch } from '@/shared/lib/swr';

import { parseDeployUrls } from '../lib/parse-deploy-urls';

import type { ReactNode } from 'react';
import type { DeployUrlParts } from '../model/deploy-url-parts.schema';

type Props = Readonly<DeployUrlParts>;

const apiUrl = `${Route.DEPLOY_FINDER_API}/find-deploy-urls`;

export function DeployUrls(params: Props): ReactNode {
  const { data, isLoading } = useFetch(apiUrl, { params });

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
}

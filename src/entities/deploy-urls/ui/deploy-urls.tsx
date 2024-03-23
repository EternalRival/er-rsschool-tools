import { useFetchJson } from '@/shared/lib/swr/use-fetch-json';
import { Route } from '@/shared/router';

import { parseDeployUrls } from '../lib/parse-deploy-urls';

import type { ReactNode } from 'react';
import type { DeployUrlParts } from '../model/deploy-url-parts.schema';

type Props = Readonly<DeployUrlParts>;

export function DeployUrls(props: Props): ReactNode {
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
}

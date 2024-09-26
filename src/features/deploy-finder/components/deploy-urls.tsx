/* import { Route } from 'old/old_shared/router';
import { useFetch } from 'old/old_shared/lib/swr';
import { UiAnchor, UiSpinner } from 'old/old_shared/ui';
import { parseDeployUrls } from 'old/old_features/deploy-finder/lib/parse-deploy-urls';

import { parseDeployUrls } from '../lib/parse-deploy-urls';

import type { DeployUrlParts } from 'old/old_features/deploy-finder/model/deploy-url-parts.schema';
import type { DeployUrlParts } from '../model/deploy-url-parts.schema';

type Props = Readonly<DeployUrlParts>;

const apiUrl = `${Route.DEPLOY_FINDER_API}/find-deploy-urls`;

export const DeployUrls = (params: Props) => {
  const { data, isLoading } = useFetch(apiUrl, { params });

  if (isLoading) {
    return (
      <div className="flex h-10 items-center justify-center">
        <UiSpinner className="scale-50" />
      </div>
    );
  }

  const deployUrls = parseDeployUrls(data);
  const hasUrls = deployUrls && deployUrls.length > 0;

  return hasUrls ? (
    <ul className="p-2">
      {deployUrls.map((url) => (
        <li key={url}>
          <UiAnchor
            href={url}
            className="text-teal-600 underline underline-offset-2 hover:text-teal-500"
          >
            {url}
          </UiAnchor>
        </li>
      ))}
    </ul>
  ) : (
    <span className="p-2">Not Found</span>
  );
};
 */

import { Anchor } from '~/components/anchor';

export const DeployUrls = ({ list }: { list: string[] | null }) => {
  const hasUrls = list && list.length > 0;

  return hasUrls ? (
    <ul className="p-2">
      {list.map((url) => (
        <li key={url}>
          <Anchor
            href={url}
            className="text-teal-600 underline underline-offset-2 hover:text-teal-500"
          >
            {url}
          </Anchor>
        </li>
      ))}
    </ul>
  ) : (
    <span className="p-2">Not Found</span>
  );
};

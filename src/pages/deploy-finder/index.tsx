import Head from 'next/head';

import { siteTitle } from '~/config/metadata/constants';
import { RouteName } from '~/config/router/route-name.enum';
import { DeployFinder } from '~/features/deploy-finder/components/deploy-finder';

const DeployFinderPage = () => (
  <>
    <Head>
      <title>{`${RouteName.DEPLOY_FINDER} | ${siteTitle}`}</title>
    </Head>
    <DeployFinder />
  </>
);

export default DeployFinderPage;

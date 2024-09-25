import Head from 'next/head';

import { DeployFinder } from '~/features/deploy-finder';
import { siteTitle } from '~/shared/model/constants';
import { RouteName } from '~/shared/router';

export const DeployFinderPage = () => (
  <>
    <Head>
      <title>{`${RouteName.DEPLOY_FINDER} | ${siteTitle}`}</title>
    </Head>
    <DeployFinder />
  </>
);

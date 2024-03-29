import Head from 'next/head';

import { DeployFinder } from '@/features/deploy-finder';
import { siteTitle } from '@/shared/model/constants';
import { RouteName } from '@/shared/router';

import type { ReactNode } from 'react';

export function DeployFinderPage(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.DEPLOY_FINDER} | ${siteTitle}`}</title>
      </Head>
      <DeployFinder />
    </>
  );
}

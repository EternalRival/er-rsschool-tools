import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { DeployFinderPage } from '@/pages/deploy-finder';

import type { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`Deploy Finder | ${siteTitle}`}</title>
      </Head>
      <DeployFinderPage />
    </>
  );
}

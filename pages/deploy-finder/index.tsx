import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { DeployFinderPage } from '@/pages/deploy-finder';

import type { FC } from 'react';

const Page: FC = () => (
  <>
    <Head>
      <title>{`Deploy Finder | ${siteTitle}`}</title>
    </Head>
    <DeployFinderPage />;
  </>
);

export default Page;

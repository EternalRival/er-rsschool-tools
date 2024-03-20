import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { XCheckCalcPage } from '@/pages/xcheck-calc';

import type { FC } from 'react';

const Page: FC = () => (
  <>
    <Head>
      <title>{`XCheck Calc | ${siteTitle}`}</title>
    </Head>
    <XCheckCalcPage />;
  </>
);

export default Page;

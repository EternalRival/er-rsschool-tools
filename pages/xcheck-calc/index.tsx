import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { XCheckCalcPage } from '@/pages/xcheck-calc';

import type { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`XCheck Calc | ${siteTitle}`}</title>
      </Head>
      <XCheckCalcPage />
    </>
  );
}

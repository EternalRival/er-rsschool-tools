import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { XCheckCalcPage } from '@/pages/xcheck-calc';
import { RouteName } from '@/shared/router';

import type { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.X_CHECK_CALC} | ${siteTitle}`}</title>
      </Head>
      <XCheckCalcPage />
    </>
  );
}

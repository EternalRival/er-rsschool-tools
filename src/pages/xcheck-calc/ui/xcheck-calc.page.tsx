import Head from 'next/head';

import { XCheckCalc } from '~/features/xcheck-calc';
import { siteTitle } from '~/shared/model/constants';
import { RouteName } from '~/shared/router';

export const XCheckCalcPage = () => (
  <>
    <Head>
      <title>{`${RouteName.X_CHECK_CALC} | ${siteTitle}`}</title>
    </Head>
    <XCheckCalc />
  </>
);

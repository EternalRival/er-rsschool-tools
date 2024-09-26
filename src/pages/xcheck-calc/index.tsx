import Head from 'next/head';

import { XCheckCalc } from '~/features/xcheck-calc/components/xcheck-calc';
import { siteTitle } from '~/config/constants';
import { RouteName } from '~/config/router/route-name.enum';

export const XCheckCalcPage = () => (
  <>
    <Head>
      <title>{`${RouteName.X_CHECK_CALC} | ${siteTitle}`}</title>
    </Head>
    <XCheckCalc />
  </>
);

export default XCheckCalcPage;

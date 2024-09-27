import Head from 'next/head';

import { siteTitle } from '~/config/metadata/constants';
import { RouteName } from '~/config/router/route-name.enum';
import { XCheckCalc } from '~/features/xcheck-calc/components/xcheck-calc';

export const XCheckCalcPage = () => (
  <>
    <Head>
      <title>{`${RouteName.X_CHECK_CALC} | ${siteTitle}`}</title>
    </Head>
    <XCheckCalc />
  </>
);

export default XCheckCalcPage;

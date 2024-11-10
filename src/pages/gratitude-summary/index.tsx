import Head from 'next/head';

import { siteTitle } from '~/config/metadata/constants';
import { RouteName } from '~/config/router/route-name.enum';
import { GratitudeSummary } from '~/features/gratitude-summary/components/gratitude-summary';

export const GratitudeSummaryPage = () => (
  <>
    <Head>
      <title>{`${RouteName.GRATITUDE_SUMMARY} | ${siteTitle}`}</title>
    </Head>
    <GratitudeSummary />
  </>
);

export default GratitudeSummaryPage;

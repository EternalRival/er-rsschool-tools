import Head from 'next/head';

import { siteTitle } from '~/config/metadata/constants';
import { RouteName } from '~/config/router/route-name.enum';
import { UrlDuplicates } from '~/features/url-duplicates/components/url-duplicates';

const UrlDuplicatesPage = () => (
  <>
    <Head>
      <title>{`${RouteName.URL_DUPLICATES} | ${siteTitle}`}</title>
    </Head>
    <UrlDuplicates />
  </>
);

export default UrlDuplicatesPage;

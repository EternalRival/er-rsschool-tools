import Head from 'next/head';

import { UrlDuplicates } from '~/features/url-duplicates';
import { siteTitle } from '~/shared/model/constants';
import { RouteName } from '~/shared/router';

export const UrlDuplicatesPage = () => (
  <>
    <Head>
      <title>{`${RouteName.URL_DUPLICATES} | ${siteTitle}`}</title>
    </Head>
    <UrlDuplicates />
  </>
);

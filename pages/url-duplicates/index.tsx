import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { UrlDuplicatesPage } from '@/pages/url-duplicates';
import { RouteName } from '@/shared/router';

import type { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.URL_DUPLICATES} | ${siteTitle}`}</title>
      </Head>
      <UrlDuplicatesPage />
    </>
  );
}

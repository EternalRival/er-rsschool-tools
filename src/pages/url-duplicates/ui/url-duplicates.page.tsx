import Head from 'next/head';

import { UrlDuplicates } from '@/features/url-duplicates';
import { siteTitle } from '@/shared/model/constants';
import { RouteName } from '@/shared/router';

import type { ReactNode } from 'react';

export function UrlDuplicatesPage(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.URL_DUPLICATES} | ${siteTitle}`}</title>
      </Head>
      <UrlDuplicates />
    </>
  );
}

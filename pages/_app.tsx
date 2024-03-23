import { Layout } from '@/app';
import '@/app/globals.css';

import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

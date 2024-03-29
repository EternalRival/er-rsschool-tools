import { Layout } from './layout';

import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

export function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import { Layout } from './layout';

import type { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

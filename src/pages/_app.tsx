import '~/assets/globals.css';
import { Providers } from '~/config/providers';
import { Layout } from '~/features/layout/components/layout';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Providers>
);

export default App;

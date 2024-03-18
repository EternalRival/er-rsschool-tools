import '@/app/globals.css';
import { Layout } from '@/app';

import type { AppType } from 'next/app';

const App: AppType = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;

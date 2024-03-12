import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { AppType } from 'next/app';

const App: AppType = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;

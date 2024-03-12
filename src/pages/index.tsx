import { HelloWorld } from '@/components/hello-world';
import { Navigation } from '@/components/navigation';
import type { FC } from 'react';

const Home: FC = () => (
  <main>
    <div className="bg-color3">Home</div>
    <HelloWorld />
    <Navigation routes={{ page1: 'page1', page2: 'page2' }} />
  </main>
);

export default Home;

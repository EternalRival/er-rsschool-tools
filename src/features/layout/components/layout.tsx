import { clsx } from 'clsx';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

import { FloatingGithubLink } from '~/components/floating-github-link';
import { metadata, siteTitle } from '~/config/constants';
import { RouteName } from '~/config/router/route-name.enum';
import { getFilteredRoutes } from '~/utils/get-filtered-routes';

import { NavBar } from './nav-bar';

import type { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren;

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin', 'cyrillic'] });

export const Layout = ({ children }: LayoutProps) => (
  <div className={clsx(roboto.className, 'flex min-h-screen bg-color2')}>
    <Head>
      <link
        rel="icon"
        type="image/png"
        href="/eternalrival.png"
      />
      <link
        rel="apple-touch-icon"
        href="/eternalrival.png"
      />
      {metadata.map(({ content, name }) => (
        <meta
          content={content}
          name={name}
          key={name}
        />
      ))}
      <title>{siteTitle}</title>
    </Head>
    <header className="flex shrink-0 items-center bg-color1 shadow-[0_0_10px_-5px]">
      <NavBar routes={getFilteredRoutes((name) => RouteName.HOME !== name)} />
      <FloatingGithubLink />
    </header>
    <main className="flex grow flex-col items-center justify-center p-4">{children}</main>
  </div>
);

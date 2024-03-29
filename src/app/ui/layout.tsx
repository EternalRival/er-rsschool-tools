import { clsx } from 'clsx';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

import { FloatingGithubLink } from '@/features/floating-github-link';
import { NavBar } from '@/features/nav-bar';
import { metadata, siteTitle } from '@/shared/model/constants';
import { RouteName, getFilteredRoutes } from '@/shared/router';

import type { PropsWithChildren, ReactNode } from 'react';

type Props = Readonly<PropsWithChildren>;

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin', 'cyrillic'] });

export function Layout({ children }: Props): ReactNode {
  return (
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
}

import { TanstackQueryProvider } from './tanstack-query.provider';

import type { PropsWithChildren } from 'react';

type ProvidersProps = PropsWithChildren;

export const Providers = ({ children }: ProvidersProps) => <TanstackQueryProvider>{children}</TanstackQueryProvider>;

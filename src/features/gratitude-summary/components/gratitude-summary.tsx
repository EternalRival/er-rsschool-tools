import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { Anchor } from '~/components/anchor';
import { Button } from '~/components/button';
import { Spinner } from '~/components/spinner';
import { TextField } from '~/components/text-field';
import { Route } from '~/config/router/route.enum';

import { apiResponseSchema } from '../schemas/api-response.schema';

import type { RequestParams } from '../schemas/request-params.schema';
import type { ApiResponse } from '../schemas/api-response.schema';

const Dialog = dynamic(() => import('~/components/dialog'), { ssr: false });

type Kek = Extract<ApiResponse, { success: true }>['data'][number]['receivers' | 'senders']['list'];

export const GratitudeSummary = () => {
  const [outputData, setOutputData] = useState<Kek>([]);
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState<RequestParams['sort']>('receivers');
  const [nickname, setNickname] = useState<RequestParams['q']>('');

  const [nicknameDebounced] = useDebounce(nickname, 1000);

  const query = useQuery({
    queryKey: ['gratitude-summary', sort, nicknameDebounced],
    async queryFn() {
      try {
        const url = Route.GRATITUDE_SUMMARY_API;
        const endpoint = '/get-gratitudes-summary';
        const response = await fetch(`${url}${endpoint}?sort=${sort}&q=${nicknameDebounced}`);

        const data = apiResponseSchema.parse(await response.json());

        if (data.success === false) {
          throw new Error(data.error);
        }

        return data.data;
      } catch {
        return null;
      }
    },
  });

  return (
    <div className="flex flex-col gap-1">
      <Dialog
        open={showModal}
        onCancel={() => setShowModal(false)}
        type="alert"
        cancelText="Close"
      >
        <ul className="grid grid-cols-[max-content_auto] gap-px">
          {outputData.map(({ github, count }) => (
            <li
              className="contents"
              key={github}
            >
              <div className="px-3 text-center text-blue-chill-700 outline outline-1 outline-blue-chill-500">
                {count}
              </div>
              <div className="relative px-3 outline outline-1 outline-blue-chill-500">
                <Anchor
                  href={`https://github.com/${github}`}
                  className="before:absolute before:inset-0"
                >
                  {github}
                </Anchor>
              </div>
            </li>
          ))}
        </ul>
      </Dialog>

      <TextField
        label="Search"
        labelClassName="text-sm p-0.5"
        placeholder="EternalRival"
        className="placeholder:opacity-50"
        onChange={(e) => setNickname(e.target.value)}
      />

      <ul className="scrollbar relative grid h-96 min-w-96 grid-cols-[auto_4rem_4rem] grid-rows-[min-content] overflow-y-scroll">
        <li className="sticky top-0 z-10 border-b border-blue-chill-500 bg-blue-chill-100 p-1.5 font-medium text-blue-chill-800 duration-200">
          Github
        </li>
        <li className="sticky top-0 z-10 border-x border-b border-blue-chill-500 bg-blue-chill-100 p-1.5 text-center font-medium text-blue-chill-800 duration-200 hover:bg-blue-chill-200">
          <button
            type="button"
            className="before:absolute before:inset-0"
            onClick={() => setSort('receivers')}
          >
            From
          </button>
        </li>
        <li className="sticky top-0 z-10 border-b border-blue-chill-500 bg-blue-chill-100 p-1.5 text-center font-medium text-blue-chill-800 duration-200 hover:bg-blue-chill-200">
          <button
            type="button"
            className="before:absolute before:inset-0"
            onClick={() => setSort('senders')}
          >
            To
          </button>
        </li>

        {query.isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </div>
        )}

        {query.data
          ? query.data.map(({ github, receivers, senders }, i) => (
              <li
                className="contents"
                key={github}
              >
                <div className="relative flex items-center border-t border-blue-chill-500 p-1.5 text-blue-chill-700">
                  <span className="w-10 text-center">{`${i + 1}. `}</span>
                  <Anchor
                    href={`https://github.com/${github}`}
                    className="before:absolute before:inset-0"
                  >
                    {github}
                  </Anchor>
                </div>

                <div className="min-w-14 border-t border-blue-chill-500 p-1.5">
                  <Button
                    mode="outlined"
                    size="s"
                    className="w-full bg-blue-chill-200 hover:bg-blue-chill-300"
                    onClick={() => {
                      setOutputData(receivers.list);
                      setShowModal(true);
                    }}
                    disabled={receivers.count < 1}
                  >
                    {receivers.count}
                  </Button>
                </div>

                <div className="min-w-14 border-t border-blue-chill-500 p-1.5">
                  <Button
                    mode="outlined"
                    size="s"
                    className="w-full bg-blue-chill-200 hover:bg-blue-chill-300"
                    onClick={() => {
                      setOutputData(senders.list);
                      setShowModal(true);
                    }}
                    disabled={senders.count < 1}
                  >
                    {senders.count}
                  </Button>
                </div>
              </li>
            ))
          : 'Not found'}
      </ul>
    </div>
  );
};

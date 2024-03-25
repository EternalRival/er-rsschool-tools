import { useState } from 'react';

import { parseApiResponse } from '@/shared/api/url-duplicates';
import { useFetch } from '@/shared/lib/swr';
import { Route } from '@/shared/router';

import { defaultFormData } from '../model/constants';

import type { Json } from '@/shared/lib/zod';
import type { Dispatch, SetStateAction } from 'react';
import type { FormData } from '../model/form-data-schema';

type UseUrlDuplicatesReturn = {
  urlDuplicatesObject: Json;
  setFormData: Dispatch<SetStateAction<FormData>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const apiUrl = `${Route.URL_DUPLICATES_API}/find-url-duplicates`;

export function useUrlDuplicates(): UseUrlDuplicatesReturn {
  const [{ rawUrls, idOffset }, setFormData] = useState<FormData>(defaultFormData);
  const [isResultsMode, setIsResultsMode] = useState(false);

  const body = { rawUrls, idOffset };
  const { data } = useFetch(apiUrl, { method: 'POST', body });

  const apiResponse = parseApiResponse(data);

  return {
    urlDuplicatesObject: apiResponse?.success ? apiResponse.data : null,
    setFormData,
    showModal: isResultsMode,
    setShowModal: setIsResultsMode,
  };
}

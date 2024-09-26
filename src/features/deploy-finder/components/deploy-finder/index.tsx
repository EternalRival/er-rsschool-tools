import { useEffect, useState } from 'react';

import { LocalStorageKey, wrappedLS } from '~/utils/wrapped-ls';

import { formDataSchema } from '../../schemas/form-data.schema';
import { DeployFinderForm } from '../deploy-finder-form';

import type { Json } from '~/lib/zod/json.schema';
import type { FormData } from '../../schemas/form-data.schema';

const EMPTY_FORM_DATA = {
  nickname: '',
  course: '',
  task: '',
} satisfies FormData;

export const DeployFinder = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const persistedFormData = wrappedLS.get(LocalStorageKey.DEPLOY_FINDER);

    setFormData(formDataSchema.catch(EMPTY_FORM_DATA).parse(persistedFormData));
  }, []);

  const saveFormData = (formData: Json) => {
    wrappedLS.set(LocalStorageKey.DEPLOY_FINDER, formData);
  };

  return (
    formData && (
      <DeployFinderForm
        formData={formData}
        onFormDataChange={saveFormData}
      />
    )
  );
};

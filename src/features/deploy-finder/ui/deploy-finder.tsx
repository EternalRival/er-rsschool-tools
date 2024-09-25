import { debounce } from '~/shared/lib/debounce';
import { getFormDataObject } from '~/shared/lib/get-form-data-object';
import { UiForm } from '~/shared/ui';

import { populatePropsWithValues } from '../lib/populate-props-with-values';
import { useDeployFinder } from '../lib/use-deploy-finder';
import { parseDeployUrlParts } from '../model/deploy-url-parts.schema';
import { inputsFormProps } from '../model/inputs-form-props';
import { DeployUrls } from './deploy-urls';
import { FormFields } from './form-fields';

import type { FormEventHandler } from 'react';

const FORM_LEGEND_TEXT = 'Deploy Finder';
const DEBOUNCE_DELAY = 1000;

export const DeployFinder = () => {
  const { inputValues, isFilled, setInputValues } = useDeployFinder();

  const handleInput = debounce<FormEventHandler<HTMLInputElement>>(({ target }) => {
    if (target instanceof HTMLInputElement) {
      target.form?.requestSubmit();
    }
  }, DEBOUNCE_DELAY);

  return (
    <>
      <UiForm
        legendText={FORM_LEGEND_TEXT}
        onSubmit={(e) => {
          e.preventDefault();
          setInputValues(parseDeployUrlParts(getFormDataObject(e.currentTarget)));
        }}
        className="grid grid-cols-[repeat(2,_max-content)] place-items-center gap-1"
      >
        <FormFields
          inputPropsList={populatePropsWithValues(inputsFormProps, inputValues)}
          onInput={handleInput}
        />
      </UiForm>
      {isFilled ? <DeployUrls {...inputValues} /> : <p className="p-2">Enter your data</p>}
    </>
  );
};

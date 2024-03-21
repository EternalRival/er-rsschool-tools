import { DeployUrls } from '@/entities/deploy-urls';
import { LiveInputsForm } from '@/entities/live-inputs-form';
import { getFormDataObject } from '@/shared/lib/get-form-data-object';

import { populatePropsWithValues } from '../lib/populate-props-with-values';
import { useInputValues } from '../lib/use-input-values';
import { inputsFormProps } from '../model/inputs-form-props';

import type { FC } from 'react';

const formLegendText = 'Deploy Finder';

export const DeployFinder: FC = () => {
  const { inputValues, isFilled, parseInputValues, setInputValues } = useInputValues();

  return (
    <>
      <LiveInputsForm
        legendText={formLegendText}
        inputPropsList={populatePropsWithValues(inputsFormProps, inputValues)}
        handleSubmit={(e) => {
          e.preventDefault();
          setInputValues(parseInputValues(getFormDataObject(e.currentTarget)));
        }}
      />
      {isFilled && <DeployUrls {...inputValues} />}
    </>
  );
};

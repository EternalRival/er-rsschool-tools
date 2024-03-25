import { DeployUrls, parseDeployUrlParts } from '@/entities/deploy-urls';
import { LiveInputsForm } from '@/entities/live-inputs-form';
import { getFormDataObject } from '@/shared/lib/get-form-data-object';

import { populatePropsWithValues } from '../lib/populate-props-with-values';
import { useDeployFinder } from '../lib/use-deploy-finder';
import { inputsFormProps } from '../model/inputs-form-props';

import type { ReactNode } from 'react';

const formLegendText = 'Deploy Finder';

export function DeployFinder(): ReactNode {
  const { inputValues, isFilled, setInputValues } = useDeployFinder();

  return (
    <>
      <LiveInputsForm
        legendText={formLegendText}
        inputPropsList={populatePropsWithValues(inputsFormProps, inputValues)}
        handleSubmit={(e) => {
          e.preventDefault();
          setInputValues(parseDeployUrlParts(getFormDataObject(e.currentTarget)));
        }}
      />
      {isFilled ? <DeployUrls {...inputValues} /> : <p className="p-2">Enter your data</p>}
    </>
  );
}

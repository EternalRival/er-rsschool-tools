import { getFormDataObject } from '@/shared/lib/get-form-data-object';
import { UiForm } from '@/shared/ui';

import { useXCheckCalc } from '../lib/use-x-check-calc';
import { parseFormData } from '../model/form-data.schema';
import { inputsFormProps } from '../model/inputs-form-props';
import { parseMode } from '../model/mode.schema';
import { FormFields } from './form-fields';
import { ModeSelect } from './mode-select';
import { CalcResult } from './calc-result';

import type { ReactNode } from 'react';

const FORM_LEGEND_TEXT = 'xCheck Calc';

export function XCheckCalc(): ReactNode {
  const { mode, setMode, setInputValues, score } = useXCheckCalc();

  return (
    <div className="flex flex-col gap-1">
      <ModeSelect
        onChange={(e) => {
          setMode(parseMode(e.currentTarget.value));
          setInputValues((s) => ({ ...s, reviewer4: '' }));
        }}
      />
      <UiForm
        legendText={FORM_LEGEND_TEXT}
        onSubmit={(e) => {
          e.preventDefault();
          setInputValues(parseFormData(getFormDataObject(e.currentTarget)));
        }}
        className="grid grid-cols-[repeat(2,_max-content)] place-items-center gap-1"
      >
        <FormFields inputPropsList={mode === 'NodeJS' ? inputsFormProps.slice(0, -1) : inputsFormProps} />
      </UiForm>
      <CalcResult score={score} />
    </div>
  );
}

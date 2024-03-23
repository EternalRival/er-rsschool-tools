import clsx from 'clsx';

import { LiveInputsForm } from '@/entities/live-inputs-form';
import { getFormDataObject } from '@/shared/lib/get-form-data-object';

import { useXCheckCalc } from '../lib/use-x-check-calc';
import { parseInputValues } from '../model/input-values-schema';
import { inputsFormProps } from '../model/inputs-form-props';
import { parseMode } from '../model/mode.schema';

import type { FormEvent, ReactNode } from 'react';

const formLegendText = 'xCheck Calc';

export function XCheckCalc(): ReactNode {
  const { mode, setMode, setInputValues, score } = useXCheckCalc();

  return (
    <div>
      <select
        className="mb-1 w-full bg-color1 p-2 text-end shadow shadow-color4 outline-none"
        onChange={(e) => {
          setMode(parseMode(e.currentTarget.value));
          setInputValues((s) => ({ ...s, reviewer4: '' }));
        }}
      >
        <option value="JSFE">JSFE</option>
        <option value="NodeJS">NodeJS</option>
      </select>
      <LiveInputsForm
        legendText={formLegendText}
        inputPropsList={mode === 'NodeJS' ? inputsFormProps.slice(0, -1) : inputsFormProps}
        handleSubmit={(e: FormEvent<HTMLFormElement>): void => {
          e.preventDefault();
          setInputValues(parseInputValues(getFormDataObject(e.currentTarget)));
        }}
        debounceMs={0}
      />
      <p
        className={clsx(
          'mt-1 bg-color1 p-2 text-center',
          score.isAppealable ? 'shadow-sm shadow-color-valid' : 'shadow shadow-color4'
        )}
      >
        {score.average}
      </p>
    </div>
  );
}

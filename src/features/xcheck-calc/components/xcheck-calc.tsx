import clsx from 'clsx';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '~/components/form';
import { Select } from '~/components/select';
import { TextField } from '~/components/text-field';

import { calcScore } from '../utils/calc-score';

import type { Mode } from '../types/mode.type';
import type { XCheckFormData } from '../types/xcheck-form-data.type';

const FORM_LEGEND_TEXT = 'xCheck Calc';

const MODE_VARIANTS = ['JSFE', 'NodeJS'] satisfies Mode[];

const INPUTS_FORM_PROPS = [
  { label: 'Max Score:', name: 'max', value: '100' },
  { label: 'Self-check:', name: 'self', value: '0' },
  { label: 'Reviewer 1:', name: 'reviewer1' },
  { label: 'Reviewer 2:', name: 'reviewer2' },
  { label: 'Reviewer 3:', name: 'reviewer3' },
  { label: 'Reviewer 4:', name: 'reviewer4' },
] satisfies { label: string; name: keyof XCheckFormData; value?: string }[];

export const XCheckCalc = () => {
  const { register, watch, setValue } = useForm<XCheckFormData>();
  const modeForm = useForm<{ mode: Mode }>();

  const mode = modeForm.watch('mode');
  const inputs = watch();

  const score = calcScore(mode, inputs);

  useEffect(() => {
    setValue('reviewer4', '');
  }, [mode, setValue]);

  return (
    <div className="flex flex-col gap-1">
      <Select
        {...modeForm.register('mode')}
        selectOptions={MODE_VARIANTS.map((variant) => ({ label: variant, value: variant }))}
        containerClassName="contents"
        className="rounded-none border-none bg-color1 text-end shadow shadow-color4 outline-none"
      />

      <Form
        legendText={FORM_LEGEND_TEXT}
        className="grid grid-cols-[repeat(2,_max-content)] place-items-center gap-1"
      >
        {(mode === 'NodeJS' ? INPUTS_FORM_PROPS.slice(0, -1) : INPUTS_FORM_PROPS).map(({ label, name, value }) => (
          <TextField
            {...register(name)}
            key={name}
            label={label}
            type="number"
            defaultValue={value}
            placeholder="<empty>"
            containerClassName="contents"
            labelClassName="justify-self-end"
            className="w-20"
          />
        ))}
      </Form>

      <p
        className={clsx(
          'bg-color1 p-2 text-center',
          score.isAppealable ? 'shadow-color-valid shadow-sm' : 'shadow shadow-color4'
        )}
      >
        {score.averageScore}
      </p>
    </div>
  );
};

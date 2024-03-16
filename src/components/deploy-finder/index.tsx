import { getFormDataObject } from '@/lib/get-form-data-object';
import { useLocalStorage } from '@/lib/use-local-storage';
import { parseNullable } from '@/shared/zod';
import type { FC, FormEventHandler } from 'react';
import { LiveInputsForm } from '../live-inputs-form';
import type { FormFieldProps } from '../live-inputs-form/form-field-props.schema';
import type { DeployFinderInputs } from './deploy-finder-inputs.schema';
import { deployFinderInputsSchema } from './deploy-finder-inputs.schema';
import { DeployUrls } from './deploy-urls';

const legendText = 'Введите данные';
const inputsFormProps: FormFieldProps[] = [
  { label: 'Github nickname:', name: 'nickname', className: 'lowercase' },
  { label: 'Course:', name: 'course', className: 'uppercase' },
  { label: 'Taskname:', name: 'task', className: 'lowercase' },
];

const parseInputValues = parseNullable(deployFinderInputsSchema);
const parseInputValuesKey = parseNullable(deployFinderInputsSchema.keyof());

const mergeInputsFormPropsWithValues = (list: FormFieldProps[], state: DeployFinderInputs | null): FormFieldProps[] => {
  if (state === null) {
    return list;
  }

  return list.map((props) => {
    const key = parseInputValuesKey(props.name);
    return key ? { ...props, value: state[key] } : props;
  });
};

export const DeployFinder: FC = () => {
  const [inputValues, setInputValues] = useLocalStorage('deploy-finder');

  const typedInputValues = parseInputValues(inputValues);

  const isCorrectURLsData = typedInputValues && Object.values(typedInputValues).every(Boolean);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const urlData = parseInputValues(getFormDataObject(e.currentTarget));

    if (urlData && Object.values(urlData).some(Boolean)) {
      setInputValues(urlData);
    } else {
      setInputValues(null);
    }
  };

  return (
    <>
      <LiveInputsForm
        legendText={legendText}
        inputList={mergeInputsFormPropsWithValues(inputsFormProps, typedInputValues)}
        handleSubmit={handleFormSubmit}
      />
      {isCorrectURLsData && <DeployUrls {...typedInputValues} />}
    </>
  );
};

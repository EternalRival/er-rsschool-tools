import { getFormDataObject } from '@/lib/get-form-data-object';
import { useLocalStorage } from '@/lib/use-local-storage';
import { parseNullable } from '@/shared/zod';
import type { FC, FormEventHandler } from 'react';
import { z } from 'zod';
import { LiveInputsForm } from '../live-inputs-form';
import type { FormFieldProps } from '../live-inputs-form/form-field-props.schema';

const legendText = 'Введите данные';
const inputList: FormFieldProps[] = [
  { label: 'Github nickname:', name: 'nickname' },
  { label: 'Course:', name: 'course' },
  { label: 'Taskname:', name: 'task' },
];

const stateSchema = z.object({
  nickname: z.string(),
  course: z.string(),
  task: z.string(),
});
const parseState = parseNullable(stateSchema);
const parseKey = parseNullable(stateSchema.keyof());
type State = z.infer<typeof stateSchema>;

const getListWithValuesFromState = (list: FormFieldProps[], state: State): FormFieldProps[] =>
  list.map((props) => {
    const key = parseKey(props.name);
    return key ? { ...props, value: state[key] } : props;
  });

export const DeployFinder: FC = () => {
  const [state, setState] = useLocalStorage('deploy-finder');

  const parsedState = parseState(state);

  const inputsData = parsedState ? getListWithValuesFromState(inputList, parsedState) : inputList;

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const urlData = parseState(getFormDataObject(e.currentTarget));

    const isNotEmpty = urlData && Object.values(urlData).some(Boolean);

    setState(isNotEmpty ? urlData : null);
  };

  return (
    <>
      <LiveInputsForm
        legendText={legendText}
        inputList={inputsData}
        handleSubmit={handleFormSubmit}
      />

      {parsedState && JSON.stringify(parsedState)}
    </>
  );
};

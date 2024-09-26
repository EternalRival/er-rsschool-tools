import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { Form } from '~/components/form';
import { Spinner } from '~/components/spinner';
import { TextField } from '~/components/text-field';
import { Route } from '~/config/router/route.enum';

import { apiResponseSchema } from '../schemas/api-response.schema';
import { formDataSchema } from '../schemas/form-data.schema';
import { DeployUrls } from './deploy-urls';

import type { Json } from '~/lib/zod/json.schema';
import type { FormData } from '../schemas/form-data.schema';

const FORM_LEGEND_TEXT = 'Deploy Finder';
const DEBOUNCE_DELAY = 1000;

const INPUTS_FORM_PROPS = [
  { name: 'nickname', placeholder: 'EternalRival', label: 'Github nickname:', className: 'lowercase' },
  { name: 'course', placeholder: 'JSFE2022Q3', label: 'Course:', className: 'uppercase' },
  { name: 'task', placeholder: 'songbird', label: 'Taskname:', className: 'lowercase' },
] satisfies { name: keyof FormData; placeholder: string; label: string; className: string }[];

export const DeployFinderForm = ({
  formData,
  onFormDataChange,
}: {
  formData: FormData;
  onFormDataChange: (formData: Json) => void;
}) => {
  const form = useForm<FormData>({
    defaultValues: formData,
    resolver: zodResolver(formDataSchema),
    mode: 'onChange',
  });

  const [searchParams] = useDebounce(
    formDataSchema
      .transform((formData) => {
        const params = new URLSearchParams();

        Object.entries(formData).forEach(([key, value]) => params.set(key, value));

        return params.toString();
      })
      .nullable()
      .catch(null)
      .parse(form.watch()),
    DEBOUNCE_DELAY
  );

  const query = useQuery({
    queryKey: ['deploy-urls', searchParams],
    async queryFn() {
      try {
        if (!searchParams) {
          throw new Error('No search params');
        }

        const response = await fetch(`${Route.DEPLOY_FINDER_API}/find-deploy-urls?${searchParams}`);
        const data = apiResponseSchema.parse(await response.json());

        if (data.success === false) {
          throw new Error(data.error);
        }

        return data.data;
      } catch {
        return null;
      }
    },
    enabled: Boolean(searchParams),
  });

  useEffect(() => {
    if (searchParams) {
      const searchParamsEntries = new URLSearchParams(searchParams).entries();

      onFormDataChange(Object.fromEntries(searchParamsEntries));
    }
  }, [onFormDataChange, searchParams]);

  return (
    <>
      <Form
        legendText={FORM_LEGEND_TEXT}
        className="grid grid-cols-[repeat(2,_max-content)] place-items-center gap-1"
      >
        {INPUTS_FORM_PROPS.map(({ name, placeholder, label, className }) => (
          <TextField
            key={name}
            {...form.register(name)}
            label={label}
            placeholder={placeholder}
            containerClassName="contents"
            labelClassName="justify-self-end"
            className={className}
          />
        ))}
      </Form>

      {query.isLoading !== query.isPending && <p className="p-2">Enter your data</p>}

      {query.isLoading && (
        <div className="flex h-10 items-center justify-center">
          <Spinner className="scale-50" />
        </div>
      )}

      {query.isSuccess && <DeployUrls list={query.data} />}
    </>
  );
};

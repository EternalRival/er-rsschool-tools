import { deployUrlPartsSchema, type DeployUrlParts } from '@/entities/deploy-urls';
import type { FormFieldProps } from '@/entities/live-inputs-form';
import { parseNullable } from '@/shared/lib/zod';

type PopulatePropsWithValues = (props: FormFieldProps[], values: Nullable<DeployUrlParts>) => FormFieldProps[];

const parseValuesKey = parseNullable(deployUrlPartsSchema.keyof());

export const populatePropsWithValues: PopulatePropsWithValues = (propsList, values) => {
  if (values === null) {
    return propsList;
  }

  return propsList.map((props) => {
    const key = parseValuesKey(props.name);
    return key ? { ...props, value: values[key] } : props;
  });
};

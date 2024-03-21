import { parseDeployUrlPartsKey } from '@/entities/deploy-urls';

import type { DeployUrlParts } from '@/entities/deploy-urls';
import type { FormFieldProps } from '@/entities/live-inputs-form';

type PopulatePropsWithValues = (props: FormFieldProps[], values: DeployUrlParts) => FormFieldProps[];

export const populatePropsWithValues: PopulatePropsWithValues = (propsList, values) =>
  propsList.map((props) => {
    const key = parseDeployUrlPartsKey(props.name);

    return key ? { ...props, value: values[key] } : props;
  });

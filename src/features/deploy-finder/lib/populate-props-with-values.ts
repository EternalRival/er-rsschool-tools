import { parseDeployUrlPartsKey } from '@/entities/deploy-urls';

import type { DeployUrlParts } from '@/entities/deploy-urls';
import type { FormFieldProps } from '@/entities/live-inputs-form';

export function populatePropsWithValues(propsList: FormFieldProps[], values: DeployUrlParts): FormFieldProps[] {
  return propsList.map((props) => {
    const key = parseDeployUrlPartsKey(props.name);

    return key ? { ...props, value: values[key] } : props;
  });
}

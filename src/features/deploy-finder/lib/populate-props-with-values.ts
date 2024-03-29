import { parseDeployUrlPartsKey } from '../model/deploy-url-parts.schema';

import type { DeployUrlParts } from '../model/deploy-url-parts.schema';
import type { FormFieldProps } from '../model/form-field-props.type';

export function populatePropsWithValues(propsList: FormFieldProps[], values: DeployUrlParts): FormFieldProps[] {
  return propsList.map((props) => {
    const key = parseDeployUrlPartsKey(props.name);

    return key ? { ...props, value: values[key] } : props;
  });
}

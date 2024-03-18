import { isString } from '@/shared/lib/type-guards';

export const filterDeployUrls = (list: Nullable<string>[]): string[] => list.filter(isString);

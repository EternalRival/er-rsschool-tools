import { SUGGESTED_DIRS, SUGGESTED_FILES } from '../model/constants';

export const buildSuggestedUrls = (base: string): string[] =>
  SUGGESTED_DIRS.flatMap((dir) => SUGGESTED_FILES.map((file) => `${base}${dir}${file}`));

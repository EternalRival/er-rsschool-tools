export const parseOkUrl = ({ ok, url }: Response): Nullable<string> => (ok ? url : null);

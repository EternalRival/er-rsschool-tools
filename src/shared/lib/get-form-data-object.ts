export function getFormDataObject(form: HTMLFormElement): Dict<FormDataEntryValue> {
  return Object.fromEntries(new FormData(form).entries());
}

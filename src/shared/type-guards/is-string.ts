function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function assertIsString(value: unknown): asserts value is string {
  if (!isString(value)) {
    throw new TypeError(`value ${JSON.stringify(value)} is not a string`);
  }
}

export { assertIsString, isString };

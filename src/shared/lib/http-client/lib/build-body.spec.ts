import { buildBody } from './build-body';

describe('build-body', () => {
  const [GET, POST, PUT, PATCH, DELETE] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] as const;
  const body = { a: 1, b: 2 };
  const bodyString = JSON.stringify(body);

  it('(GET | POST | PUT | PATCH | DELETE) with empty body', () => {
    [GET, POST, PUT, PATCH, DELETE].forEach((method) => {
      expect(buildBody(method)).toBeNull();
    });
  });

  it('(GET | DELETE) with body', () => {
    [GET, DELETE].forEach((method) => {
      expect(buildBody(method, body)).toBeNull();
    });
  });

  it('(POST | PUT | PATCH) with body', () => {
    [POST, PUT, PATCH].forEach((method) => {
      expect(buildBody(method, body)).toBe(bodyString);
    });
  });
});

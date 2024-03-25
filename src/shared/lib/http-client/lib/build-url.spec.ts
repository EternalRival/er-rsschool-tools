import { buildUrl } from './build-url';

describe('build-url', () => {
  const shortUrl = '/api/endpoint';
  const longUrl = `http://google.com${shortUrl}`;
  const oldParams = 'key=value&k=v';

  const newParamsObj = { a: '1', b: '2' };
  const newParams = 'a=1&b=2';

  it('add new params to full url', () => {
    expect(buildUrl(longUrl, newParamsObj)).toBe(`${longUrl}?${newParams}`);
  });

  it('add new params url endpoint', () => {
    expect(buildUrl(shortUrl, newParamsObj)).toBe(`${shortUrl}?${newParams}`);
  });

  it('return initial full url if no new params', () => {
    expect(buildUrl(longUrl)).toBe(longUrl);
  });

  it('return initial url endpoint if no new params', () => {
    expect(buildUrl(shortUrl)).toBe(shortUrl);
  });

  it('add new params to full url with old params', () => {
    expect(buildUrl(`${longUrl}?${oldParams}`, newParamsObj)).toBe(`${longUrl}?${oldParams}&${newParams}`);
  });

  it('add new params url endpoint  with old params', () => {
    expect(buildUrl(`${shortUrl}?${oldParams}`, newParamsObj)).toBe(`${shortUrl}?${oldParams}&${newParams}`);
  });

  it('return initial full url if no new params with old params', () => {
    expect(buildUrl(`${longUrl}?${oldParams}`)).toBe(`${longUrl}?${oldParams}`);
  });

  it('return initial url endpoint if no new params with old params', () => {
    expect(buildUrl(`${shortUrl}?${oldParams}`)).toBe(`${shortUrl}?${oldParams}`);
  });
});

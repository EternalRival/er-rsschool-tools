export function parseUrl(url: string): { baseUrl: string; search: string } {
  const { href, search } = new URL(url, 'https://placeholder.com');

  return {
    baseUrl: href.replace(/^https:\/\/placeholder.com/, '').replace(search, ''),
    search,
  };
}

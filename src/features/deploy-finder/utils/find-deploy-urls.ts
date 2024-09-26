import type { RequestParams } from '../schemas/request-params.schema';

const BASE_URL = 'https://rolling-scopes-school.github.io/';
const SUGGESTED_DIRS = ['', '/pages', '/pages/main', '/pages/Main', '/pages/home', '/pages/Home'];
const SUGGESTED_FILES = ['', '/Index.html', '/home.html', '/Home.html', '/main.html', '/Main.html'];
const REVALIDATE_IN_MINUTES = 5;
const fetchOptions = { next: { revalidate: REVALIDATE_IN_MINUTES * 60 } };

function buildBaseUrl({ course, nickname, task }: RequestParams): string {
  return `${BASE_URL}${nickname}-${course}/${task}`;
}

function buildSuggestedUrls(base: string): string[] {
  return SUGGESTED_DIRS.flatMap((dir) => SUGGESTED_FILES.map((file) => `${base}${dir}${file}`));
}

function mapUrlsToFetches(urls: string[]): Promise<Response>[] {
  return urls.map((url) => fetch(url, fetchOptions));
}

function parseOkUrls(responses: Response[]): string[] {
  return responses.reduce<string[]>((acc, { ok, url }) => (ok ? [...acc, url] : acc), []);
}

export async function findDeployUrls(deployData: RequestParams): Promise<string[]> {
  return parseOkUrls(await Promise.all(mapUrlsToFetches(buildSuggestedUrls(buildBaseUrl(deployData)))));
}

type Dict<T = string> = Record<string, T>;

type Input = {
  idOffset: number;
  rawUrls: string;
};

type GroupedDicts = {
  unique: Dict;
  duplicated: Dict;
};

type Url = { id: number; url: string };

function createUrlWithIdOffset(idOffset: number): (url: string, id: number) => Url {
  return (url, id) => ({ id: id + idOffset, url: url.trim() });
}

function rawDataToUrls({ rawUrls, idOffset }: Input): Url[] {
  const createUrl = createUrlWithIdOffset(idOffset);
  const EOL = '\n';

  return rawUrls
    .trim()
    .replace(/\/(index.html)?$/gim, '')
    .split(EOL)
    .map(createUrl);
}

function urlsToGroupedDicts(urls: Url[]): GroupedDicts {
  const uniqueUrls = new Set();
  const [unique, duplicated]: [Dict, Dict] = [{}, {}];

  urls.forEach(({ id, url }) => {
    if (uniqueUrls.has(url)) {
      duplicated[id] = url;
    } else {
      uniqueUrls.add(url);
      unique[id] = url;
    }
  });

  return { unique, duplicated };
}

export function findUrlDuplicates(input: Input): GroupedDicts {
  return urlsToGroupedDicts(rawDataToUrls(input));
}

import { Anchor } from '~/components/anchor';

export const DeployUrls = ({ list }: { list: string[] | null }) => {
  const hasUrls = list && list.length > 0;

  return hasUrls ? (
    <ul className="p-2">
      {list.map((url) => (
        <li key={url}>
          <Anchor
            href={url}
            className="text-blue-chill-600 underline underline-offset-2 hover:text-blue-chill-500"
          >
            {url}
          </Anchor>
        </li>
      ))}
    </ul>
  ) : (
    <span className="p-2">Not Found</span>
  );
};

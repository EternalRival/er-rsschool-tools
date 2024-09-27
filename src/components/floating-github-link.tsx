import Image from 'next/image';

export const FloatingGithubLink = () => (
  <a
    href="https://github.com/EternalRival"
    target="_blank"
    className="fixed bottom-8 right-8 block outline-none drop-shadow-[0_0_.5rem_#000] transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-black"
  >
    <Image
      className="drop-shadow-[0_0_.5rem_#000]"
      src="/gh-logo.png"
      alt="author's github link"
      width={64}
      height={64}
      priority
    />
  </a>
);

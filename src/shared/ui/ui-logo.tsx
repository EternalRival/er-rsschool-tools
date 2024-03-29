import clsx from 'clsx';
import Image from 'next/image';

import type { HTMLAttributes, ReactNode } from 'react';

type ImageProps = Parameters<typeof Image>[0];

type Props = Readonly<
  {
    label?: string;
    imageProps?: Readonly<Omit<ImageProps, 'alt' | 'src'> & Partial<Pick<ImageProps, 'alt' | 'src'>>>;
  } & HTMLAttributes<HTMLDivElement>
>;

const defaultImageProps = {
  alt: 'site logo',
  src: '/opengraph-image.png',
  width: 48,
  height: 48,
};

export function UiLogo({
  label,
  imageProps: {
    alt = defaultImageProps.alt,
    src = defaultImageProps.src,
    width = defaultImageProps.width,
    height = defaultImageProps.height,
    ...imageProps
  } = defaultImageProps,
  className,
  ...props
}: Props): ReactNode {
  return (
    <div
      {...props}
      className={clsx('flex items-center gap-2 text-xl', className)}
    >
      <Image
        className="h-12 w-12"
        alt={alt}
        src={src}
        width={width}
        height={height}
        {...imageProps}
      />
      {label}
    </div>
  );
}

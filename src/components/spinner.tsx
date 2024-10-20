import clsx from 'clsx';

type SpinnerProps = {
  className?: string;
  borderColor?: string;
  bgColor?: string;
};

export const Spinner = ({ className, borderColor, bgColor }: SpinnerProps) => {
  const childrenStyles = clsx(
    'absolute h-full w-full border-2',
    borderColor ?? 'border-blue-chill-500',
    bgColor ?? 'bg-blue-chill-500/25'
  );

  return (
    <div className={clsx('flex h-20 w-20 items-center justify-center', className)}>
      <div className="h-10 w-10 animate-[cube_2s_infinite_ease] [transform-style:preserve-3d]">
        <div className={clsx(childrenStyles, '[transform:translateZ(-20px)_rotateY(180deg)]')} />
        <div className={clsx(childrenStyles, 'origin-top-right [transform:rotateY(-270deg)_translateX(50%)]')} />
        <div className={clsx(childrenStyles, 'origin-[center_left] [transform:rotateY(270deg)_translateX(-50%)]')} />
        <div className={clsx(childrenStyles, 'origin-[top_center] [transform:rotateX(90deg)_translateY(-50%)]')} />
        <div className={clsx(childrenStyles, 'origin-[bottom_center] [transform:rotateX(-90deg)_translateY(50%)]')} />
        <div className={clsx(childrenStyles, '[transform:translateZ(20px)]')} />
      </div>
    </div>
  );
};

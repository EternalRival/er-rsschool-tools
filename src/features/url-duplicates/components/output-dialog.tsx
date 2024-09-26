import clsx from 'clsx';
import dynamic from 'next/dynamic';

const Dialog = dynamic(() => import('~/components/dialog'), { ssr: false });

const TEXTAREA_PROPS = {
  cols: 90,
  rows: 12,
  placeholder: [1, 2, 3].map((n) => `https://example.com/${n}`).join('\n'),
};

type OutputDialogProps = {
  open: boolean;
  onClose: () => void;
  data: string;
};

export const OutputDialog = ({ open, onClose, data }: OutputDialogProps) => (
  <Dialog
    type="alert"
    open={open}
    onCancel={onClose}
    cancelText="Close"
  >
    <textarea
      {...TEXTAREA_PROPS}
      className={clsx('scrollbar resize-none rounded-sm p-2 text-sm outline-none ring-2 ring-teal-500', 'mx-0.5 -mb-1')}
      readOnly
      value={data}
    />
  </Dialog>
);

import { useCallback, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { animateDialog } from './animate-dialog';
import { Button } from '../button';

import type { ComponentProps, PropsWithChildren } from 'react';

type BaseDialogProps = ComponentProps<'dialog'>;

type DialogActions =
  | {
      type: 'alert';
      onCancel: () => void;
      cancelText: string;
    }
  | {
      type: 'confirm';
      onCancel: () => void;
      onSubmit: () => void;
      cancelText: string;
      submitText: string;
    };

type DialogProps = PropsWithChildren<
  DialogActions & {
    open: boolean;
    contentContainerProps?: Omit<ComponentProps<'div'>, 'children'>;
  }
>;

export const Dialog = (props: DialogProps) => {
  const { children, open, contentContainerProps, type, onCancel, cancelText } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogOpen = useCallback(async () => {
    const { current: dialog } = dialogRef;

    if (dialog) {
      dialog.showModal();
      await animateDialog(dialog, 'in');
    }
  }, []);

  const dialogClose = useCallback(async (...args: Parameters<HTMLDialogElement['close']>) => {
    const { current: dialog } = dialogRef;

    if (dialog) {
      await animateDialog(dialog, 'out');
      dialog.close(...args);
    }
  }, []);

  const handleDialogCancel: BaseDialogProps['onCancel'] = (event) => {
    event.preventDefault();
    dialogClose('cancel').catch(console.error);
  };
  const handleDialogClick: BaseDialogProps['onClick'] = (event) => {
    if (event.target === event.currentTarget) {
      dialogClose('cancel').catch(console.error);
    }
  };
  const handleDialogClose = () => {
    const { current: dialog } = dialogRef;

    switch (type) {
      case 'alert': {
        onCancel();
        break;
      }

      case 'confirm': {
        const { onSubmit } = props;

        if (dialog && dialog.returnValue !== 'cancel') {
          onSubmit();
        } else {
          onCancel();
        }

        break;
      }

      default: {
        throw new Error('unknown dialog type');
      }
    }
  };

  const handleActionsCancel = () => {
    dialogClose('cancel').catch(console.error);
  };
  const handleActionsSubmit = () => {
    dialogClose('confirm').catch(console.error);
  };

  useLayoutEffect(() => {
    if (open) {
      dialogOpen().catch(console.error);
    }
  }, [dialogOpen, open]);

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [open]);

  return (
    open &&
    createPortal(
      <dialog
        ref={dialogRef}
        className="shadow shadow-color4 backdrop:bg-transparent backdrop:backdrop-blur-sm"
        onCancel={handleDialogCancel}
        onClick={handleDialogClick}
        onClose={handleDialogClose}
      >
        <div className="flex min-w-96 flex-col gap-4 bg-color1 p-4">
          <div {...contentContainerProps}>{children}</div>

          <div className="flex gap-3">
            <Button
              onClick={handleActionsCancel}
              className="grow"
            >
              {cancelText}
            </Button>

            {type === 'confirm' && (
              <Button
                onClick={handleActionsSubmit}
                className="grow"
              >
                {props.submitText}
              </Button>
            )}
          </div>
        </div>
      </dialog>,
      document.body
    )
  );
};

export default Dialog;

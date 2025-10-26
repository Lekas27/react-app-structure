import type { FC } from "react";
import type { QueuedDialog } from "../types/dialog";
import type { ButtonVariantProps } from "../../../button/styles/variants";
import { DialogHeader } from "../../components/header";
import { DialogDescription } from "../../components/description";
import { DialogTitle } from "../../components/title";
import { DialogFooter } from "../../components/footer";
import { Button } from "../../../button";

type Props = {
  dialog: QueuedDialog;
  styles: {
    titleClassName: string;
    confirmButtonVariant: NonNullable<ButtonVariantProps["variant"]>;
    iconBackgroundClassName: string;
    iconClassName: string;
  };
  isLoading: boolean;
  onCancelAction: (dialog: QueuedDialog) => void;
  onConfirmAction: (dialog: QueuedDialog) => Promise<void>;
};

export const StandardDialog: FC<Props> = ({
  dialog,
  styles,
  isLoading,
  onCancelAction,
  onConfirmAction,
}) => {
  const {
    title,
    description,
    content,
    onConfirm,
    showCancel,
    cancelText,
    destructive,
    confirmText,
  } = dialog;

  return (
    <>
      <DialogHeader>
        <DialogTitle className={styles.titleClassName}>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      {content && <div className="py-4">{content}</div>}
      {(onConfirm || showCancel !== false) && (
        <DialogFooter>
          {showCancel !== false && (
            <Button
              variant="outline"
              onClick={() => onCancelAction(dialog)}
              disabled={isLoading}
            >
              {cancelText || "Cancel"}
            </Button>
          )}
          {onConfirm && (
            <Button
              variant="solid"
              color={destructive ? "danger" : "default"}
              onClick={() => onConfirmAction(dialog)}
              loading={isLoading}
              disabled={isLoading}
            >
              {confirmText || "Confirm"}
            </Button>
          )}
        </DialogFooter>
      )}
    </>
  );
};

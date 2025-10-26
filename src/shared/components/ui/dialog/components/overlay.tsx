import { Overlay } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";

import { classNameManager } from "../../../../lib/css";

const { mergeClasses } = classNameManager;

type Props = ComponentProps<typeof Overlay>;

export const DialogOverlay: FC<Props> = ({ className, ...props }) => {
  return (
    <Overlay
      data-slot="dialog-overlay"
      className={mergeClasses(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className || ""
      )}
      {...props}
    />
  );
};

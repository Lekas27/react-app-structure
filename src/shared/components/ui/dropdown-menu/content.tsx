import { Content, Portal } from "@radix-ui/react-dropdown-menu";
import type { ComponentProps, FC } from "react";

import { classNameManager } from "../../../lib/css";

const { joinClasses } = classNameManager;

type Props = ComponentProps<typeof Content>;

export const DropdownMenuContent: FC<Props> = ({
  className,
  sideOffset = 4,
  ...props
}) => {
  return (
    <Portal>
      <Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={joinClasses(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-gray-50 p-1 text-gray-950 shadow-md dark:bg-gray-900 dark:text-gray-50",
          className || ""
        )}
        {...props}
      />
    </Portal>
  );
};

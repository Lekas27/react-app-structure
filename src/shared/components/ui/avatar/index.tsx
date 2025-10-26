import { Root } from "@radix-ui/react-avatar";
import type { ComponentProps, FC } from "react";

import { AvatarFallback } from "./fallback";
import { AvatarImage } from "./image";

import { classNameManager } from "../../../lib/css";

// Re-export avatar components

const { joinClasses } = classNameManager;

type Props = ComponentProps<typeof Root>;

export const Avatar: FC<Props> = ({ className, ...props }) => {
  return (
    <Root
      data-slot="avatar"
      className={joinClasses(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className || ""
      )}
      {...props}
    />
  );
};

export { AvatarImage, AvatarFallback };

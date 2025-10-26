import type { ComponentProps, FC } from "react";

// Re-export all card components
import { CardAction } from "./action";
import { CardContent } from "./content";
import { CardDescription } from "./description";
import { CardFooter } from "./footer";
import { CardHeader } from "./header";
import { CardTitle } from "./title";

import { classNameManager } from "../../../lib/css";

const { joinClasses } = classNameManager;

type Props = ComponentProps<"div">;

/**
 * Displays a card with header, content, and footer.
 *
 * Reference: https://ui.shadcn.com/docs/components/card
 */
export const Card: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card"
      className={joinClasses(
        "flex flex-col gap-6 rounded-xl border bg-gray-50 py-6 text-gray-950 shadow-sm dark:bg-gray-900 dark:text-gray-50",
        className || ""
      )}
      {...props}
    />
  );
};

export {
  CardHeader,
  CardContent,
  CardTitle,
  CardAction,
  CardDescription,
  CardFooter,
};

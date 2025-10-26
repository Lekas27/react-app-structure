import { type VariantProps, cva } from "class-variance-authority";
import { type HTMLProps, type ReactNode, forwardRef } from "react";

import { classNameManager } from "../../../../lib/css";

const { mergeClasses } = classNameManager;

const variants = cva(
  "text-secondary-1 theme-transition text-base leading-6 dark:text-white",
  {
    variants: {},
  }
);

type Props = HTMLProps<HTMLParagraphElement> &
  VariantProps<typeof variants> & {
    children?: ReactNode;
  };

export const Span = forwardRef<HTMLParagraphElement, Props>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={mergeClasses(variants({ className }))}
      {...props}
    >
      {children}
    </span>
  )
);

Span.displayName = "Span";

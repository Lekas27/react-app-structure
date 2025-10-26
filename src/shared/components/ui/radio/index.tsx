import { Indicator, Item, Root } from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, FC } from "react";

import { type Option } from "./types";

type Props = ComponentProps<typeof Root> & {
  options: Option[];
  className?: string;
  itemClassName?: string;
  showIndicator?: boolean;
} & VariantProps<typeof radioItemClasses> &
  VariantProps<typeof radioGroupClasses>;

const radioGroupClasses = cva("", {
  variants: {
    orientation: {
      horizontal: "inline-flex space-x-4",
      vertical: "flex flex-col space-y-2",
    },
    layout: {
      // TODO: Refactor this if needed
      stack: "",
      tabs: "flex w-full flex-wrap items-stretch justify-between gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    layout: "stack",
  },
});

const radioItemClasses = cva(
  "relative flex cursor-pointer items-center border outline-none select-none focus:z-10 focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      colorScheme: {
        blue: "focus:ring-blue-500 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white",
        red: "focus:ring-red-500 data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600 data-[state=checked]:text-white",
        green:
          "focus:ring-green-500 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white",
        gradient_light_blue:
          "hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-700 data-[state=checked]:to-cyan-700 data-[state=checked]:text-white",
        gray: "m-0 flex-1 justify-center rounded-lg border-0 bg-transparent px-4 py-2 outline-transparent focus:ring-transparent focus:ring-offset-transparent data-[state=checked]:bg-white data-[state=checked]:shadow-sm dark:data-[state=checked]:bg-gray-900",
      },
      size: {
        sm: "gap-2 px-2 py-1 text-xs",
        md: "gap-2 px-4 py-2 text-sm",
        lg: "gap-3 px-6 py-3 text-base",
      },
      shape: {
        rounded: "rounded-md",
        pill: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      colorScheme: "blue",
      size: "md",
      shape: "rounded",
    },
  }
);

export const RadioGroup: FC<Props> = ({
  options,
  orientation = "vertical",
  layout = "stack",
  colorScheme = "blue",
  size = "md",
  shape = "rounded",
  className,
  itemClassName,
  showIndicator = false,
  ...props
}) => {
  return (
    <Root
      data-slot="radio-group"
      className={radioGroupClasses({ orientation, layout, className })}
      {...props}
    >
      {options.map(({ value, label, disabled, icon }) => (
        <Item
          key={value}
          value={value}
          disabled={disabled}
          className={radioItemClasses({ colorScheme, size, shape, className: itemClassName })}
        >
          {showIndicator && (
            <div className="relative flex items-center justify-center w-4 h-4 rounded-full border-2 border-current mr-2">
              <Indicator className="relative flex items-center justify-center w-2 h-2 rounded-full bg-current" />
            </div>
          )}
          {icon && <div className="flex items-center justify-center">{icon}</div>}
          {label}
        </Item>
      ))}
    </Root>
  );
};

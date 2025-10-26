import { forwardRef, type JSX, type ReactNode, type Ref } from "react";
import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { ErrorMessage } from "../../error/message";
import { Label } from "../../label";
import { cn } from "../../../../lib/style";

// Types for checkbox options
export type CheckboxOption<T = string> = {
  value: T;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
};

export type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TContext = unknown,
  TTransformed = unknown
> = Omit<UseControllerProps<TFieldValues, TName>, "control"> & {
  /** Accept the exact Control, including context and transformed output types */
  control: Control<TFieldValues, TContext, TTransformed>;
  id?: string;
  className?: string;
  label?: ReactNode;
  tooltip?: ReactNode;
  options: CheckboxOption[];
  /** Layout: 'grid' for grid layout (default), 'vertical' for stacked */
  layout?: "grid" | "vertical";
  /** Grid columns (only applies when layout is 'grid') */
  columns?: 2 | 3 | 4;
  /** Custom class for the options container */
  containerClassName?: string;
  /** Custom class for individual option buttons */
  optionClassName?: string;
};

const CheckboxGroupFormFieldInner = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TContext = unknown,
  TTransformed = unknown
>(
  {
    id,
    name,
    className,
    label,
    tooltip,
    control,
    rules,
    defaultValue,
    options,
    layout = "grid",
    columns = 2,
    containerClassName,
    optionClassName,
  }: Props<TFieldValues, TName, TContext, TTransformed>,
  ref: Ref<HTMLDivElement>
) => {
  const {
    field: { value = [] as string[], onChange },
    fieldState: { error },
  } = useController<TFieldValues, TName, TTransformed>({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleToggle = (optionValue: string) => {
    const currentValues = Array.isArray(value) ? value : [];
    const newValues = currentValues.includes(optionValue)
      ? currentValues.filter((v) => v !== optionValue)
      : [...currentValues, optionValue];
    onChange(newValues);
  };

  const isSelected = (optionValue: string) => {
    return Array.isArray(value) && value.includes(optionValue);
  };

  const gridColsClass = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[columns];

  return (
    <div className={className} ref={ref}>
      {label && (
        <Label
          htmlFor={id || name}
          label={label}
          required={!!rules?.required}
          tooltip={tooltip}
        />
      )}

      <div
        className={cn(
          layout === "grid"
            ? `grid ${gridColsClass} gap-3`
            : "flex flex-col gap-3",
          containerClassName
        )}
      >
        {options.map((option) => (
          <button
            key={String(option.value)}
            type="button"
            disabled={option.disabled}
            onClick={() => handleToggle(String(option.value))}
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all",
              isSelected(String(option.value))
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
              option.disabled && "opacity-50 cursor-not-allowed",
              optionClassName
            )}
          >
            {option.icon && (
              <div className="w-6 h-6 mb-2 flex items-center justify-center">
                {option.icon}
              </div>
            )}
            <span className="text-sm font-medium text-center leading-tight break-words hyphens-auto">
              {option.label}
            </span>
          </button>
        ))}
      </div>

      <ErrorMessage error={error} />
    </div>
  );
};

export const CheckboxGroupFormField = forwardRef(
  CheckboxGroupFormFieldInner
) as <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TContext = unknown,
  TTransformed = unknown
>(
  props: Props<TFieldValues, TName, TContext, TTransformed> & {
    ref?: Ref<HTMLDivElement>;
  }
) => JSX.Element;

import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

export interface FormLabelProps {
  inputId?: string;
}

export const FormLabel: FC<HTMLAttributes<HTMLElement> & FormLabelProps> = ({
  inputId,
  children,
  className,
  ...props
}) => {
  return (
    <label
      {...props}
      htmlFor={inputId}
      className={classNames("font-medium text-gray-300", className)}
    >
      {children}
    </label>
  );
};

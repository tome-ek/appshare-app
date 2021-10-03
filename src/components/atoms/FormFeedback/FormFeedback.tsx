import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

export interface FormFeedbackProps {
  state?: "default" | "valid" | "error";
}

export const FormFeedback: FC<HTMLAttributes<HTMLElement> & FormFeedbackProps> =
  ({ state = "default", children, className, ...props }) => {
    const helperTextColor = {
      default: "text-gray-450",
      valid: "text-green-400/[0.85]",
      error: "text-red-400",
    };

    return (
      <p
        {...props}
        className={classNames("mt-2 text-sm", helperTextColor[state])}
      >
        {children}
      </p>
    );
  };

import classNames from "classnames";
import { FC } from "react";
import { useInput } from "../../molecules/Input/useInput";
import { FormFeedback } from "../FormFeedback/FormFeedback";

interface CheckboxProps {
  name: string;
  labelStyle?: "default" | "muted";
  error?: string;
  isLoading?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  name,
  labelStyle = "default",
  error,
  isLoading = false,
  children,
}) => {
  const { register, shouldDisplayError } = useInput(name);

  const labelStyles = {
    default: "text-gray-100",
    muted: "text-gray-400 text-sm+ font-light",
  };

  return (
    <div
      className={classNames(
        {
          "opacity-70": isLoading,
        },
        "transition"
      )}
    >
      <label className="group hover:cursor-pointer">
        <input
          type="checkbox"
          className="focus:ring-offset-0 border-gray-300/[0.2] hover:border-gray-300/30 focus:border-blue-500/60 focus:ring-[3px] focus:ring-blue-500 focus:ring-opacity-[0.3] rounded-[2px]  bg-gray-300/20  hover:cursor-pointer focus:outline-none transition"
          {...register(name)}
        />
        <span className={classNames("pl-2", labelStyles[labelStyle])}>
          {children}
        </span>
      </label>
      {shouldDisplayError && error && (
        <FormFeedback state="error">{error}</FormFeedback>
      )}
    </div>
  );
};

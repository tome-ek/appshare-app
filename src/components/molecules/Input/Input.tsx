import classNames from "classnames";
import { FC, FunctionComponentElement, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FormFeedback } from "../../atoms/FormFeedback/FormFeedback";
import { FormLabel } from "../../atoms/FormLabel/FormLabel";
import { BorderColor } from "./../../atoms/Color/BorderColor";
import { Icon } from "../../atoms/Icon/Icon";
import { ToggleVisibilityButton } from "../../atoms/ToggleVisibilityButton/ToggleVisibilityButton";
import { useTextInput } from "./useTextInput";

export interface InputProps {
  name: string;
  label?: string;
  error?: string;
  isLoading?: boolean;
  icon?: IconType;
  accessory?: FunctionComponentElement<any>;
}

export const Input: FC<InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  name,
  label,
  error,
  icon,
  accessory,
  isLoading = false,
  ...props
}) => {
  const {
    register,
    shouldDisplayError,
    handleTogglePasswordVisibility,
    isPasswordVisible,
  } = useTextInput(name);

  return (
    <div
      className={classNames(
        {
          "opacity-70": isLoading,
        },
        "transition"
      )}
    >
      {(label || accessory) && (
        <div className="flex justify-between items-end">
          {label && <FormLabel inputId={props.id}>{label}</FormLabel>}
          {accessory && (
            <div className="flex flex-1 items-end justify-end">{accessory}</div>
          )}
        </div>
      )}

      <div className="relative mt-1.5">
        <input
          disabled={isLoading}
          className={classNames(
            "w-full pr-3 py-2 border rounded focus:ring-[3px] focus:ring-opacity-[0.3] bg-transparent placeholder-gray-500 transition",
            { "pl-10": !!icon },
            { "pl-4": !icon },
            { [BorderColor.default]: !shouldDisplayError },
            { [BorderColor.error]: shouldDisplayError }
          )}
          {...props}
          {...register(name)}
          type={
            props.type === "password" && isPasswordVisible ? "text" : props.type
          }
        />

        {icon && <Icon icon={icon} className="absolute left-3 top-0 h-full" />}

        {props.type === "password" && (
          <ToggleVisibilityButton
            onToggleVisibility={handleTogglePasswordVisibility}
            visible={isPasswordVisible}
          />
        )}
      </div>

      {shouldDisplayError && error && (
        <FormFeedback state="error">{error}</FormFeedback>
      )}
    </div>
  );
};

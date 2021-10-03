import classNames from "classnames";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { Spinner } from "../Spinner/Spinner";

interface ButtonProps {
  label: string;
  variant?: "solid" | "ghost";
  colorScheme?: "primary" | "gray" | "danger";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant = "solid",
  colorScheme = "gray",
  size = "medium",
  fullWidth = false,
  isLoading = false,
  label,
  type = "button",
  className,
  onClick: handleButtonClicked,
}: ButtonProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  const styles = {
    "primary-solid":
      "focus:ring-primary-500 disabled:bg-primary-300/30 bg-primary-600 hover:bg-primary-500 active:bg-primary-600 text-white",
    "primary-ghost":
      "focus:ring-primary-400 disabled:bg-primary-300/10 bg-primary-300/20 hover:bg-primary-300/[0.275] active:bg-primary-300/[0.35] text-primary-300 hover:text-primary-300",
    "gray-solid":
      "focus:ring-gray-550 disabled:bg-gray-300/30 bg-gray-600 hover:bg-gray-500 active:bg-gray-600 text-white",
    "gray-ghost":
      "focus:ring-gray-550 disabled:bg-gray-300/10 bg-gray-300/20 hover:bg-gray-300/[0.275] active:bg-gray-300/[0.35] text-white",
    "danger-solid":
      "focus:ring-red-500 disabled:bg-red-300/30 bg-red-600 hover:bg-red-500 active:bg-red-600 text-white",
    "danger-ghost":
      "focus:ring-red-400 disabled:bg-red-300/10 focus:ring-red-500 bg-red-300/20 hover:bg-red-500 active:bg-red-600 text-red-300 hover:text-white",
  };

  const sizes = {
    small: ["py-1", "text-sm+", fullWidth ? "px-3" : "px-5"],
    medium: ["py-2", "text-md", fullWidth ? "px-3" : "px-7"],
    large: ["py-2.5", "text-md", fullWidth ? "px-3" : "px-7"],
  };

  const baseStyle =
    "relative focus:ring-[3px] border border-gray-100/[0.1] shadow focus:ring-opacity-50 rounded font-medium transition focus:outline-none";

  const spinner = (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <Spinner size="xs" color="white" />
    </div>
  );

  return (
    <button
      onClick={handleButtonClicked}
      type={type}
      disabled={isLoading}
      className={classNames(
        baseStyle,
        styles[`${colorScheme}-${variant}`],
        sizes[size],
        { "w-full": fullWidth },
        className,
        { "text-opacity-0 ": isLoading }
      )}
    >
      {label}
      {isLoading && spinner}
    </button>
  );
};

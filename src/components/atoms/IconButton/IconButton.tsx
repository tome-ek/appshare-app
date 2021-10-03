import classNames from "classnames";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  size?: "small" | "default";
  variant?: "clear" | "ghost" | "solid";
  colorScheme?: "primary" | "danger" | "gray";
  iconClassName?: string;
}

export const IconButton = ({
  size = "default",
  variant = "clear",
  colorScheme = "gray",
  icon: Icon,
  className,
  iconClassName,
  ...props
}: IconButtonProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  const sizes = {
    small: ["p-2", "w-10 h-10"],
    default: ["p-2", "w-12 h-12"],
  };

  const bgStyles = {
    "primary-solid":
      "disabled:bg-primary-300/30 bg-primary-600 hover:bg-primary-500 active:bg-primary-600 text-white",
    "primary-ghost":
      "disabled:bg-primary-300/10 bg-primary-300/20 hover:bg-primary-300/[0.275] active:bg-primary-300/[0.35] text-primary-300 hover:text-primary-300",
    "primary-clear":
      "disabled:bg-transparent bg-transparent hover:bg-primary-300/20 active:bg-primary-300/[0.275]",
    "gray-solid":
      "disabled:bg-gray-300/30 bg-gray-600 hover:bg-gray-500 active:bg-gray-600 text-white",
    "gray-ghost":
      "disabled:bg-gray-300/10 bg-gray-300/20 hover:bg-gray-300/[0.275] active:bg-gray-300/[0.35]",
    "gray-clear":
      "disabled:bg-transparent bg-transparent hover:bg-gray-300/20 active:bg-gray-300/[0.275]",
    "danger-solid":
      "disabled:bg-red-300/30 bg-red-600 hover:bg-red-500 active:bg-red-600 text-white",
    "danger-ghost":
      "disabled:bg-red-300/10 bg-red-300/20 hover:bg-red-500 active:bg-red-600",
    "danger-clear":
      "disabled:bg-transparent bg-transparent hover:bg-red-300/[0.275] active:bg-red-300/[0.35]",
  };

  const borderAndTextStyles = {
    "primary-solid": "ring-primary-500 text-white-500",
    "primary-ghost":
      "ring-primary-500 text-primary-500 hover:text-primary-500/[0.75] active:text-primary-500/[0.50]",
    "primary-clear":
      "ring-primary-500 text-primary-450 hover:text-primary-400 active:text-primary-300",
    "gray-solid": "ring-gray-500 text-white-500",
    "gray-ghost":
      "ring-gray-500 text-gray-200 hover:text-gray-100 active:text-gray-50",
    "gray-clear":
      "ring-blue-500 text-gray-450 hover:text-gray-400 active:text-gray-300",
    "danger-solid": "ring-red-500 text-white-500",
    "danger-ghost":
      "ring-red-500 text-red-500 hover:text-red-500/[0.75] active:text-red-500/[0.50]",
    "danger-clear":
      "ring-red-400 text-red-450 hover:text-red-400 active:text-red-350",
  };

  const baseStyle =
    "rounded-sm focus:ring-[3px] ring-blue-500 focus:ring-opacity-50 transition focus:outline-none group";

  return (
    <button
      {...props}
      type="button"
      aria-label="Close"
      className={classNames(
        baseStyle,
        sizes[size],
        borderAndTextStyles[`${colorScheme}-${variant}`],
        bgStyles[`${colorScheme}-${variant}`],
        className
      )}
    >
      <Icon
        className={classNames(
          iconClassName,
          "w-full h-full transform transition"
        )}
      />
    </button>
  );
};

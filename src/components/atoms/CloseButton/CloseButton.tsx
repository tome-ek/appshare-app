import classNames from "classnames";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { HiX } from "react-icons/hi";

interface CloseButtonProps {
  size?: "small" | "medium" | "large";
  colorScheme?: "info" | "success" | "danger" | "default";
}

export const CloseButton = ({
  size = "medium",
  colorScheme = "default",
  ...props
}: CloseButtonProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  const sizes = {
    small: ["p-0.5", "w-6 h-6"],
    medium: ["p-1", "w-10 h-10"],
    large: ["p-1.5", "w-14 h-14"],
  };

  const colorStyles = {
    info: "ring-blue-500 text-blue-500 hover:text-blue-500/[0.75] active:text-blue-500/[0.50]",
    default:
      "ring-blue-500 text-gray-500 hover:text-gray-300 active:text-gray-100",
    success:
      "ring-green-500 text-green-500 hover:text-green-500/[0.75] active:text-green-500/[0.50]",
    danger:
      "ring-red-400 text-red-400 hover:text-red-400/[0.75] active:text-red-400/[0.50]",
  };

  const baseStyle =
    "rounded-sm focus:ring-[3px] ring-blue-500 focus:ring-opacity-50 transition focus:outline-none";

  return (
    <button
      {...props}
      type="button"
      aria-label="Close"
      className={classNames(baseStyle, sizes[size], colorStyles[colorScheme])}
    >
      <HiX className="w-full h-full" />
    </button>
  );
};

import classNames from "classnames";
import { FC, HTMLProps } from "react";
import { IconType } from "react-icons";
import { CloseButton } from "../../atoms/CloseButton/CloseButton";

interface AlertProps {
  text?: string;
  colorScheme?: "info" | "success" | "danger";
  icon?: IconType;
  onClose?: () => void;
}

export const Alert: FC<HTMLProps<HTMLElement> & AlertProps> = ({
  text,
  colorScheme = "info",
  icon: Icon,
  onClose: handleCloseClick,
  className,
}) => {
  const containerStyles = {
    info: "bg-blue-400/10 border-blue-500/30",
    success: "bg-green-400/10 border-green-500/30",
    danger: "bg-red-400/10 border-red-400/30",
  };

  const iconStyles = {
    info: "text-blue-400",
    success: "text-green-500",
    danger: "text-red-400",
  };

  const baseContainerStyle =
    "flex align-middle items-center justify-between text-left py-4 px-5 border rounded";

  return (
    <div
      className={classNames(
        className,
        baseContainerStyle,
        containerStyles[colorScheme]
      )}
    >
      <div>
        {Icon && (
          <Icon
            className={classNames(
              "inline h-[16px] w-[16px] mr-4 align-text-bottom",
              iconStyles[colorScheme]
            )}
          />
        )}
        <p className="inline text-gray-300">{text}</p>
      </div>
      <div className="pl-4 inline-flex">
        <CloseButton
          onClick={handleCloseClick}
          size="small"
          className="self-center"
          colorScheme={colorScheme}
        />
      </div>
    </div>
  );
};

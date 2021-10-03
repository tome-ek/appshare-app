import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import { IconType } from "react-icons";

export type IconProps = {
  icon: IconType;
};

export const Icon: FC<HTMLAttributes<HTMLElement> & IconProps> = ({
  icon: IconComponent,
  className,
}) => {
  const style = "w-[1.1rem] text-gray-500";
  return <IconComponent className={classNames(className, style)} />;
};

import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

export const Divider: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <div className={classNames("h-[1px] bg-gray-300/10", className)}></div>
  );
};

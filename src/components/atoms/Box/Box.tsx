import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 0 | 1 | 2 | 3 | 4;
}

export const Box: FC<BoxProps> = ({
  children,
  className,
  elevation = 0,
  ...props
}) => {
  const elevations = {
    0: "shadow",
    1: "bg-gray-833 shadow-xl",
    2: "bg-gray-800 shadow",
    3: "bg-gray-766 shadow",
    4: "bg-gray-750 shadow",
  };
  const style = "rounded border border-gray-300/[0.15]";

  return (
    <div
      {...props}
      className={classNames(style, elevations[elevation], className)}
    >
      {children}
    </div>
  );
};

import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

export const Code: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  const baseStyle =
    "px-6 py-5 rounded-[4px] bg-gray-300/[0.12] text-white font-mono";

  return (
    <code {...props} className={classNames(baseStyle, className)}>
      {children}
    </code>
  );
};

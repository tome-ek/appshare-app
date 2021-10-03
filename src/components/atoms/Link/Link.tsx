import classNames from "classnames";
import { Link as RouterLink } from "react-router-dom";
import { FC, HTMLAttributes, HTMLProps } from "react";

export interface LinkProps {
  to: string;
}

export const Link: FC<
  HTMLProps<HTMLElement> & HTMLAttributes<HTMLElement> & LinkProps
> = ({ to, children, className }) => {
  return (
    <RouterLink
      to={to}
      className={classNames(
        "text-blue-450 hover:text-opacity-70 active:text-opacity-50 transition duration-75",
        className
      )}
    >
      {children}
    </RouterLink>
  );
};

import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

export const Headings: FC = ({ children }) => {
  return <>{children}</>;
};

export const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  const style = "text-6xl font-semibold text-gray-100";

  return (
    <h1 {...props} className={classNames(style, className)}>
      {children}
    </h1>
  );
};

export const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  const style = "text-5xl font-semibold text-gray-100";

  return (
    <h2 {...props} className={classNames(style, className)}>
      {children}
    </h2>
  );
};

export const H3: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  const style = "text-4xl font-semibold text-gray-100";

  return (
    <h2 {...props} className={classNames(style, className)}>
      {children}
    </h2>
  );
};

export const H4: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  const style = "text-3xl font-medium text-gray-100";

  return (
    <h2 {...props} className={classNames(style, className)}>
      {children}
    </h2>
  );
};

export const H5: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  const style = "text-2xl font-medium text-gray-100";

  return (
    <h2 {...props} className={classNames(style, className)}>
      {children}
    </h2>
  );
};

export const H6: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  const style = "text-xl font-medium text-gray-100";

  return (
    <h3 {...props} className={classNames(style, className)}>
      {children}
    </h3>
  );
};

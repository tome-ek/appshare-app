import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import { Link } from "../../atoms/Link/Link";

export const AuthFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const linkStyle = "text-sm text-gray-400";
  const containerStyle = "flex items-center gap-4 justify-center";

  return (
    <div className={classNames(containerStyle, className)}>
      <p className={linkStyle}>© 2021 appshare. </p>
      <Link to="/#" className={linkStyle}>
        Privacy & Terms
      </Link>
      <Link to="/#" className={linkStyle}>
        Contact us
      </Link>
    </div>
  );
};

import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import { Link } from "../../atoms/Link/Link";

export interface AuthBottomNavigationProps {
  question: string;
  cta: string;
  path: string;
}

export const AuthBottomNavigation: FC<
  HTMLAttributes<HTMLElement> & AuthBottomNavigationProps
> = ({ question, cta, path, className }) => {
  return (
    <div className={classNames("text-center", className)}>
      <p className="text-gray-400 text-sm font-light">{question}</p>
      <Link to={path} className="text-primary-450 font-medium">
        {cta}
      </Link>
    </div>
  );
};

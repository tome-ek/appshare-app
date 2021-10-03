import classNames from "classnames";
import { FcDoughnutChart } from "react-icons/fc";

export interface LogoProps {
  size?: "small" | "default";
}

export const Logo = ({ size = "default" }: LogoProps) => {
  const imageSizes = {
    small: ["w-6 h-6"],
    default: ["w-10 h-10"],
  };

  const textSizes = {
    small: ["ml-1 text-xl"],
    default: ["ml-2 text-3xl"],
  };

  return (
    <div className="flex items-center justify-center">
      <FcDoughnutChart className={classNames(imageSizes[size])} />
      <h2 className={classNames("font-semibold", textSizes[size])}>appshare</h2>
    </div>
  );
};

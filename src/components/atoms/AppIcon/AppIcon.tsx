import classNames from "classnames";

interface AppIconProps {
  src?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const AppIcon = ({
  src = "https://picsum.photos/200",
  size = "md",
}: AppIconProps) => {
  const style = "rounded";

  const sizes = {
    xs: "w-10 h-10",
    sm: "w-14 h-14",
    md: "w-20 h-20",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };
  return (
    <img alt="app icon" className={classNames(style, sizes[size])} src={src} />
  );
};

/* 
  When writing a string of multiple utility classes, always do so in an 
  order with meaning. The "Concentric CSS" approach works well with utility classes:

    1. positioning/visibility,
    2. box model,
    3. borders,
    4. backgrounds, 
    5. typography, 
    6. other visual adjustments

  Once you establish a familiar pattern of ordering, parsing through long strings 
  of utility classes will become much, much faster so a little more effort up 
  front goes a long way!
*/

import classNames from "classnames";

interface LabelProps {
  text: string;
  colorScheme?: "primary" | "secondary" | "gray" | "danger";
}

export const Label = ({ text, colorScheme = "gray" }: LabelProps) => {
  const styles = {
    primary: "bg-primary-300/20 text-primary-300 hover:text-primary-300",
    secondary: "bg-blue-300/20 text-blue-300 hover:text-blue-300",
    gray: "bg-gray-300/20 text-white",
    danger: "bg-red-300/20 text-red-300",
  };

  const baseStyle =
    "rounded-[4px] px-[10px] py-[3.5px] font-semibold text-tiny tracking-wider";

  return (
    <span className={classNames(baseStyle, styles[colorScheme])}>{text}</span>
  );
};

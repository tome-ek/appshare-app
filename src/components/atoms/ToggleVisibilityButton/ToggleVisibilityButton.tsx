import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export type ToggleVisibilityButtonProps = {
  visible: boolean;
  onToggleVisibility: () => void;
};

export const ToggleVisibilityButton: FC<
  HTMLAttributes<HTMLElement> & ToggleVisibilityButtonProps
> = ({ visible, onToggleVisibility, className }) => {
  const style = "w-[1.1rem] text-gray-500";

  const ChangePasswordVisibilityIcon = visible ? HiEyeOff : HiEye;

  const handleButtonClicked = () => {
    onToggleVisibility();
  };

  return (
    <button
      tabIndex={-1}
      type="button"
      className={classNames(
        style,
        "absolute top-0 right-3 h-full w-[1.1rem] text-gray-500 hover:text-gray-400 active:text-gray-300 transition"
      )}
      onClick={handleButtonClicked}
    >
      <ChangePasswordVisibilityIcon />
    </button>
  );
};

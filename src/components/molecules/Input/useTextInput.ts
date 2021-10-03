import { useState } from "react";
import { useInput } from "./useInput";

export const useTextInput = (inputName: string) => {
  const { register, shouldDisplayError } = useInput(inputName);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return {
    register,
    shouldDisplayError,
    handleTogglePasswordVisibility,
    isPasswordVisible,
  };
};

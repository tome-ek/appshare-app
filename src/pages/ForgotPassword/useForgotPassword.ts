import { getAuth, sendPasswordResetEmail } from "@firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ForgotPasswordFormInput,
  forgotPasswordFormSchema,
  defaultValues,
} from "./forgotPasswordFormSchema";

export const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const form = useForm<ForgotPasswordFormInput>({
    resolver: yupResolver(forgotPasswordFormSchema),
    defaultValues,
    mode: "all",
  });

  const clearError = () => {
    setError(undefined);
  };

  const clearSuccessAlert = () => {
    setIsSuccessAlertVisible(false);
  };

  const handleSubmit = async (data: ForgotPasswordFormInput) => {
    setIsLoading(true);

    await sendPasswordResetEmail(getAuth(), data.email);

    setIsSuccessAlertVisible(true);
    setIsLoading(false);
  };

  return {
    form,
    handleSubmit,
    isLoading,
    error,
    clearError,
    isSuccessAlertVisible,
    clearSuccessAlert,
  };
};

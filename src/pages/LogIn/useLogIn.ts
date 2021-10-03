import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { isError } from "../../utils/isError";
import { makeAuthService } from "../../utils/auth.service";
import {
  LogInFormInput,
  logInFormSchema,
  defaultValues,
} from "./loginFormSchema";

export const useLogIn = (handleLoginSuccess: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const form = useForm<LogInFormInput>({
    resolver: yupResolver(logInFormSchema),
    defaultValues,
    mode: "all",
  });

  const clearError = () => {
    setError(undefined);
  };

  const authService = makeAuthService();

  const handleSubmit = async (data: LogInFormInput) => {
    setIsLoading(true);

    try {
      await authService.logIn(data);

      handleLoginSuccess();
    } catch (error) {
      if (isError(error)) {
        setError(error.message);
      }
    }

    setIsLoading(false);
  };

  return { form, handleSubmit, isLoading, error, clearError };
};

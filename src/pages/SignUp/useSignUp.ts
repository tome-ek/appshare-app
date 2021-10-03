import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { isError } from "../../utils/isError";
import { makeAuthService } from "../../utils/auth.service";
import {
  SignUpFormInput,
  signupFormSchema,
  defaultValues,
} from "./signupFormSchema";

export const useSignUp = (handleSigUpSuccess: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const form = useForm<SignUpFormInput>({
    resolver: yupResolver(signupFormSchema),
    defaultValues,
    mode: "all",
  });

  const clearError = () => {
    setError(undefined);
  };

  const authService = makeAuthService();

  const handleSubmit = async (data: SignUpFormInput) => {
    setIsLoading(true);

    try {
      await authService.signUp(data);

      handleSigUpSuccess();
    } catch (error) {
      if (isError(error)) {
        setError(error.message);
      }
    }

    setIsLoading(false);
  };

  return { form, handleSubmit, isLoading, error, clearError };
};

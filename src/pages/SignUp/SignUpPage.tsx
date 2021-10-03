import { FormProvider } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthFooter } from "../../components/molecules/AuthFooter/AuthFooter";
import { SignUpCard } from "../../components/organisms/AuthCards/SignUpCard";
import { AuthTemplate } from "../../templates/AuthTemplate/AuthTemplate";
import { useSignUp } from "./useSignUp";

export const SignUpPage = () => {
  const router = useHistory();

  const handleLoginSuccess = () => {
    router.push("/dashboard");
  };

  const { form, handleSubmit, isLoading, error, clearError } =
    useSignUp(handleLoginSuccess);

  return (
    <FormProvider {...form}>
      <AuthTemplate
        authCard={
          <SignUpCard
            isLoading={isLoading}
            onSubmit={handleSubmit}
            error={error}
            handleCloseErrorAlert={clearError}
          />
        }
        footer={<AuthFooter />}
      />
    </FormProvider>
  );
};

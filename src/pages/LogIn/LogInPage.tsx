import { FormProvider } from "react-hook-form";
import { useHistory } from "react-router";
import { AuthFooter } from "../../components/molecules/AuthFooter/AuthFooter";
import { LogInCard } from "../../components/organisms/AuthCards/LogInCard";
import { AuthTemplate } from "../../templates/AuthTemplate/AuthTemplate";
import { useLogIn } from "./useLogIn";

export const LogInPage = () => {
  const router = useHistory();

  const handleLoginSuccess = () => {
    router.push("/dashboard");
  };

  const { form, handleSubmit, isLoading, error, clearError } =
    useLogIn(handleLoginSuccess);

  return (
    <FormProvider {...form}>
      <AuthTemplate
        authCard={
          <LogInCard
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

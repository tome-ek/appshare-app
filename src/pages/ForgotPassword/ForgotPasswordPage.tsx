import { FormProvider } from "react-hook-form";
import { AuthFooter } from "../../components/molecules/AuthFooter/AuthFooter";
import { ForgotPasswordCard } from "../../components/organisms/AuthCards/ForgotPasswordCard";
import { AuthTemplate } from "../../templates/AuthTemplate/AuthTemplate";
import { useForgotPassword } from "./useForgotPassword";

export const ForgotPasswordPage = () => {
  const {
    form,
    handleSubmit,
    isLoading,
    error,
    clearError,
    isSuccessAlertVisible,
    clearSuccessAlert,
  } = useForgotPassword();

  return (
    <FormProvider {...form}>
      <AuthTemplate
        authCard={
          <ForgotPasswordCard
            isLoading={isLoading}
            onSubmit={handleSubmit}
            error={error}
            handleCloseErrorAlert={clearError}
            isSuccessAlertVisible={isSuccessAlertVisible}
            handleCloseSuccessAlert={clearSuccessAlert}
          />
        }
        footer={<AuthFooter />}
      />
    </FormProvider>
  );
};

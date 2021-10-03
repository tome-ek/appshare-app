import { Logo } from "../../atoms/Logo/Logo";
import { Divider } from "../../atoms/Divider/Divider";
import { LogInForm } from "../AuthForms/LogInForm";
import { AuthCard } from "../../molecules/AuthCard/AuthCard";
import { Alert } from "../../molecules/Alert/Alert";
import { AuthBottomNavigation } from "../../molecules/AuthBottomNavigation/AuthBottomNavigation";
import { LogInFormInput } from "../../../pages/LogIn/loginFormSchema";

export type LogInCardProps = {
  error?: string;
  isLoading?: boolean;
  onSubmit: (data: LogInFormInput) => void;
  handleCloseErrorAlert?: () => void;
};

export const LogInCard = ({
  error,
  isLoading = false,
  onSubmit: handleSubmit,
  handleCloseErrorAlert,
}: LogInCardProps) => {
  return (
    <AuthCard>
      <Logo />

      <Divider className="my-5" />

      {error && (
        <Alert
          className="mb-5"
          colorScheme="danger"
          text={error}
          onClose={handleCloseErrorAlert}
        />
      )}

      <LogInForm isLoading={isLoading} onSubmit={handleSubmit} />

      <AuthBottomNavigation
        className="mt-5"
        question="Don't have an account?"
        cta="Sign up now."
        path="/get-started"
      />
    </AuthCard>
  );
};

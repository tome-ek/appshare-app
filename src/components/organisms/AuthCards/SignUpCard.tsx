import { SignUpForm } from "../AuthForms/SignUpForm";
import { Logo } from "../../atoms/Logo/Logo";
import { Divider } from "../../atoms/Divider/Divider";
import { Alert } from "../../molecules/Alert/Alert";
import { AuthCard } from "../../molecules/AuthCard/AuthCard";
import { AuthBottomNavigation } from "../../molecules/AuthBottomNavigation/AuthBottomNavigation";
import { SignUpFormInput } from "../../../pages/SignUp/signupFormSchema";

export type SignUpCardProps = {
  error?: string;
  isLoading?: boolean;
  onSubmit: (data: SignUpFormInput) => void;
  handleCloseErrorAlert?: () => void;
};

export const SignUpCard = ({
  error,
  isLoading = false,
  onSubmit: handleSubmit,
  handleCloseErrorAlert,
}: SignUpCardProps) => {
  return (
    <AuthCard>
      <Logo />

      <p className="mt-4 text-lg text-gray-400 ">
        Share and test your iOS builds with zero effort.
      </p>

      <Divider className="my-5" />

      {error && (
        <Alert
          className="mb-5"
          colorScheme="danger"
          text={error}
          onClose={handleCloseErrorAlert}
        />
      )}

      <SignUpForm isLoading={isLoading} onSubmit={handleSubmit} />

      <AuthBottomNavigation
        className="mt-5"
        question="Already have an account?"
        cta="Log in now."
        path="/log-in"
      />
    </AuthCard>
  );
};

import { Divider } from "../../atoms/Divider/Divider";
import { ForgotPasswordForm } from "../AuthForms/ForgotPasswordForm";
import { AuthCard } from "../../molecules/AuthCard/AuthCard";
import { Alert } from "../../molecules/Alert/Alert";
import { ForgotPasswordFormInput } from "../../../pages/ForgotPassword/forgotPasswordFormSchema";
import { H6 } from "../../atoms/Typography/Headings";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { HiArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router";

export type ForgotPasswordCardProps = {
  isLoading?: boolean;
  onSubmit: (data: ForgotPasswordFormInput) => void;

  error?: string;
  handleCloseErrorAlert?: () => void;

  isSuccessAlertVisible?: boolean;
  handleCloseSuccessAlert?: () => void;
};

export const ForgotPasswordCard = ({
  isLoading = false,
  onSubmit: handleSubmit,
  error,
  handleCloseErrorAlert,
  isSuccessAlertVisible,
  handleCloseSuccessAlert,
}: ForgotPasswordCardProps) => {
  const { goBack } = useHistory();

  const handleBackButtonClicked = () => {
    goBack();
  };

  return (
    <AuthCard>
      <div className="text-left">
        <IconButton
          iconClassName="-translate-x-2 group-hover:translate-x-0"
          icon={HiArrowLeft}
          size="small"
          onClick={handleBackButtonClicked}
        />
        <H6 className="mt-2">Reset your password</H6>
        <p className="mt-2 text-gray-400">
          Enter your user account&#39;s verified email address and we will send
          you a password reset link.
        </p>
      </div>

      <Divider className="my-5" />

      {error && (
        <Alert
          className="mb-5"
          colorScheme="danger"
          text={error}
          onClose={handleCloseErrorAlert}
        />
      )}

      {isSuccessAlertVisible && (
        <Alert
          className="mb-5"
          colorScheme="success"
          text="If you did everythinf correctly then we will perform things."
          onClose={handleCloseSuccessAlert}
        />
      )}

      <ForgotPasswordForm isLoading={isLoading} onSubmit={handleSubmit} />
    </AuthCard>
  );
};

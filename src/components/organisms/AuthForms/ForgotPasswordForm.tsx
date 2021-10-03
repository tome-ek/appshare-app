import { ForgotPasswordFormInput } from "../../../pages/ForgotPassword/forgotPasswordFormSchema";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../molecules/Input/Input";
import { useForm } from "./useForm";

export interface ForgotPasswordFormProps {
  isLoading?: boolean;
  onSubmit: (data: ForgotPasswordFormInput) => void;
}

export const ForgotPasswordForm = ({
  isLoading = false,
  onSubmit,
}: ForgotPasswordFormProps) => {
  const { handleSubmit, errors } = useForm();

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="text-left grid grid-cols-1 gap-5"
    >
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="Your email"
        error={errors.email?.message}
        isLoading={isLoading}
      />

      <Button
        label="Send password reset email"
        className="mt-2"
        size="large"
        colorScheme="primary"
        isLoading={isLoading}
        type="submit"
      />
    </form>
  );
};

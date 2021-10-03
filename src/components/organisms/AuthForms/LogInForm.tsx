import { LogInFormInput } from "../../../pages/LogIn/loginFormSchema";
import { Button } from "../../atoms/Button/Button";
import { Link } from "../../atoms/Link/Link";
import { Input } from "../../molecules/Input/Input";
import { useForm } from "./useForm";

export interface LogInFormProps {
  isLoading?: boolean;
  onSubmit: (data: LogInFormInput) => void;
}

export const LogInForm = ({ isLoading = false, onSubmit }: LogInFormProps) => {
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

      <Input
        id="password"
        label="Password"
        type="password"
        name="password"
        placeholder="Your password"
        error={errors.password?.message}
        isLoading={isLoading}
        accessory={
          <Link className="text-primary-450 text-sm" to="/reset-password">
            Forgot password?
          </Link>
        }
      />

      <Button
        label="Log in"
        className="mt-2"
        size="large"
        colorScheme="primary"
        isLoading={isLoading}
        type="submit"
      />
    </form>
  );
};

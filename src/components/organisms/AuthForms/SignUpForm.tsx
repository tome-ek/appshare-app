import { SignUpFormInput } from "../../../pages/SignUp/signupFormSchema";
import { Button } from "../../atoms/Button/Button";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { Link } from "../../atoms/Link/Link";
import { Input } from "../../molecules/Input/Input";
import { useForm } from "./useForm";

export interface SignUpFormProps {
  isLoading?: boolean;
  onSubmit: (data: SignUpFormInput) => void;
}

export const SignUpForm = ({
  isLoading = false,
  onSubmit,
}: SignUpFormProps) => {
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
        placeholder="john.doe@example.com"
        error={errors.email?.message}
        isLoading={isLoading}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        name="password"
        placeholder="6+ characters"
        error={errors.password?.message}
        isLoading={isLoading}
      />

      <Input
        id="betaCode"
        name="betaCode"
        placeholder="Your invitation code"
        label="Invitation code"
        type="text"
        error={errors.betaCode?.message}
        isLoading={isLoading}
      />

      <Checkbox
        labelStyle="muted"
        name="hasAcceptedTerms"
        error={errors.hasAcceptedTerms?.message}
        isLoading={isLoading}
      >
        I would love to receive{" "}
        <Link to="/#" className="text-blue-450">
          spam.
        </Link>
      </Checkbox>

      <Button
        label="Sign up"
        className="mt-2"
        size="large"
        colorScheme="primary"
        isLoading={isLoading}
        type="submit"
      />
    </form>
  );
};

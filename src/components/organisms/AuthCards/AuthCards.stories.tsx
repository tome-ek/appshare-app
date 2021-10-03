import { ComponentStory, Meta } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { LogInCard } from "./LogInCard";
import { SignUpCard } from "./SignUpCard";

export default {
  title: "Organisms/AuthCards",
} as Meta;

const LogInTemplate: ComponentStory<typeof LogInCard> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <LogInCard {...args} />
    </FormProvider>
  );
};

const SignUpTemplate: ComponentStory<typeof SignUpCard> = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <SignUpCard onSubmit={() => {}} />
    </FormProvider>
  );
};

export const LogIn = LogInTemplate.bind({});
export const LogInLoading = LogInTemplate.bind({});
LogInLoading.args = {
  isLoading: true,
};

export const LogInError = LogInTemplate.bind({});
LogInError.args = {
  error: "The email or password do not match.",
};

export const SignUp = SignUpTemplate.bind({});
export const SignUpLoading = SignUpTemplate.bind({});
SignUpLoading.args = {
  onSubmit: () => {},
};

export const SignUpError = SignUpTemplate.bind({});
SignUpError.args = {
  onSubmit: () => {},
};

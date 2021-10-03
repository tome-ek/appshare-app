import { ComponentStory, Meta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { LogInForm } from "./LogInForm";
import { SignUpForm } from "./SignUpForm";

export default {
  title: "Organisms/AuthForms",
} as Meta;

const LogInTemplate: ComponentStory<typeof LogInForm> = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="flex items-center pt-20 justify-center">
        <LogInForm onSubmit={() => {}} />
      </div>
    </FormProvider>
  );
};

const SignUpTemplate: ComponentStory<typeof SignUpForm> = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="flex items-center pt-20 justify-center">
        <SignUpForm onSubmit={() => {}} />
      </div>
    </FormProvider>
  );
};

export const LogIn = LogInTemplate.bind({});
export const SignUp = SignUpTemplate.bind({});

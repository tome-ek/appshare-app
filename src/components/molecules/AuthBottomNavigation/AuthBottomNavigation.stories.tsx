import { AuthBottomNavigation } from "./AuthBottomNavigation";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/AuthBottomNavigation",
  component: AuthBottomNavigation,
} as ComponentMeta<typeof AuthBottomNavigation>;

const Template: ComponentStory<typeof AuthBottomNavigation> = (args) => (
  <AuthBottomNavigation {...args} />
);

export const SignUp = Template.bind({});
SignUp.args = {
  question: "Already have an account?",
  cta: "Log in now.",
  path: "/#",
};

export const LogIn = Template.bind({});
LogIn.args = {
  question: "Don't have an account?",
  cta: "Sign up now.",
  path: "/#",
};

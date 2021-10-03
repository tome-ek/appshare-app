import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SignUpPage } from "./SignUpPage";

export default {
  title: "Pages/SignUp",
  component: SignUpPage,
} as ComponentMeta<typeof SignUpPage>;

const Template: ComponentStory<typeof SignUpPage> = () => <SignUpPage />;

export const Default = Template.bind({});

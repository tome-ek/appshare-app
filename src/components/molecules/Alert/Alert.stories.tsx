import { Alert } from "./Alert";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BiRocket } from "react-icons/bi";

export default {
  title: "Molecules/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Account settings You can update your account details using the form below.",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  text: "You can update your account details using the form below.",
  colorScheme: "success",
  icon: BiRocket,
};

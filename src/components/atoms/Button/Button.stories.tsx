import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Continue",
  colorScheme: "primary",
  variant: "solid",
  fullWidth: false,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Continue",
  colorScheme: "primary",
  variant: "solid",
  fullWidth: false,
  isLoading: true,
};

export const Gray = Template.bind({});
Gray.args = {
  label: "Cancel",
  variant: "ghost",
  colorScheme: "gray",
  fullWidth: false,
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Delete",
  variant: "ghost",
  colorScheme: "danger",
  fullWidth: false,
};

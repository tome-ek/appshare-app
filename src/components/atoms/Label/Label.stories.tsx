import { Label } from "./Label";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "NEW",
  colorScheme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "v0.1.0",
  colorScheme: "secondary",
};

export const Gray = Template.bind({});
Gray.args = {
  text: "ACTIVE",
  colorScheme: "gray",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "DELETED",
  colorScheme: "danger",
};

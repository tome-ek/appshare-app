import { Logo } from "./Logo";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

import { IconButton } from "./IconButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HiArrowLeft } from "react-icons/hi";

export default {
  title: "Atoms/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: HiArrowLeft,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  icon: HiArrowLeft,
};

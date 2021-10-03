import { CloseButton } from "./CloseButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/CloseButton",
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

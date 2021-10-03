import { HeaderLink } from "./HeaderLink";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/HeaderLink",
  component: HeaderLink,
} as ComponentMeta<typeof HeaderLink>;

const Template: ComponentStory<typeof HeaderLink> = (args) => (
  <HeaderLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Dashboard",
};

export const DefaultActive = Template.bind({});
DefaultActive.args = {
  text: "Dashboard",
  isActive: true,
};

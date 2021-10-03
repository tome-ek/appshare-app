import { AppIcon } from "./AppIcon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/AppIcon",
  component: AppIcon,
} as ComponentMeta<typeof AppIcon>;

const Template: ComponentStory<typeof AppIcon> = (args) => (
  <AppIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "md",
};

export const xs = Template.bind({});
xs.args = {
  size: "xs",
};

export const sm = Template.bind({});
sm.args = {
  size: "sm",
};

export const lg = Template.bind({});
lg.args = {
  size: "lg",
};

export const xl = Template.bind({});
xl.args = {
  size: "xl",
};

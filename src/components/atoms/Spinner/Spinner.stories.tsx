import { Spinner } from "./Spinner";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
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

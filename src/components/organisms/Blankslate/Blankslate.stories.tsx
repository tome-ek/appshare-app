import { Blankslate } from "./Blankslate";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FcWorkflow } from "react-icons/fc";

export default {
  title: "Molecules/Blankslate",
  component: Blankslate,
} as ComponentMeta<typeof Blankslate>;

const Template: ComponentStory<typeof Blankslate> = (args) => (
  <Blankslate {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "This is a blank slate",
  text: "Use it to provide information when no dynamic content exists.",
};

export const WithCta = Template.bind({});
WithCta.args = {
  title: "This is a blank slate",
  text: "Use it to provide information when no dynamic content exists.",
  cta: "Get Started",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: "This is a blank slate",
  text: "Use it to provide information when no dynamic content exists.",
  cta: "Get Started",
  image: FcWorkflow,
};

import { Checkbox } from "./Checkbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <>I would love to recieve spam</>,
};

export const Muted = Template.bind({});
Muted.args = {
  labelStyle: "muted",
  children: <>I would love to recieve spam</>,
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  children: (
    <>
      I would love to recieve{" "}
      <a
        href="/#"
        className="text-blue-450 hover:text-blue-500 underline transition"
      >
        spam
      </a>
    </>
  ),
};

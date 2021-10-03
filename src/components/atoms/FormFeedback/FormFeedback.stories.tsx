import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FormFeedback } from "./FormFeedback";

export default {
  component: FormFeedback,
  title: "Atoms/FormFeedback",
} as ComponentMeta<typeof FormFeedback>;

const Template: ComponentStory<typeof FormFeedback> = ({
  // eslint-disable-next-line react/prop-types
  children,
  ...args
}) => <FormFeedback {...args}>{children}</FormFeedback>;

export const Default = Template.bind({});
Default.args = {
  children: <>At least 6 characters.</>,
};

export const Invalid = Template.bind({});
Invalid.args = {
  state: "error",
  children: <>There is an error.</>,
};

export const Correct = Template.bind({});
Correct.args = {
  state: "valid",
  children: <>All good in the hood.</>,
};

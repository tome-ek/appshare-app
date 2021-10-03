import { Subhead } from "./Subhead";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/Subhead",
  component: Subhead,
} as ComponentMeta<typeof Subhead>;

const Template: ComponentStory<typeof Subhead> = (args) => (
  <div className="w-[calc(100vw-2rem)]">
    <div className="container mx-auto max-w-screen-sm">
      <Subhead {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Account settings",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: "Account settings",
  description: "You can update your account details using the form below.",
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: "Account settings",
  action: {
    colorScheme: "primary",
    title: "See more",
  },
};

export const WithActionAndDescription = Template.bind({});
WithActionAndDescription.args = {
  title: "Account settings",
  description: "You can update your account details using the form below.",
  action: {
    colorScheme: "primary",
    title: "See more",
  },
};

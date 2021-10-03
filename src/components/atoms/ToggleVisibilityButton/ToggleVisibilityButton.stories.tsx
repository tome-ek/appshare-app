import { ToggleVisibilityButton } from "./ToggleVisibilityButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/ToggleVisibilityButton",
  component: ToggleVisibilityButton,
} as ComponentMeta<typeof ToggleVisibilityButton>;

const Template: ComponentStory<typeof ToggleVisibilityButton> = (args) => (
  <ToggleVisibilityButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  visible: true,
  onToggleVisibility: () => {},
};

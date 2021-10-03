import { Icon } from "./Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FcApprove } from "react-icons/fc";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: FcApprove,
};

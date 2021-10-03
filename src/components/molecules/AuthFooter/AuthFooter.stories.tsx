import { AuthFooter } from "./AuthFooter";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/AuthFooter",
  component: AuthFooter,
} as ComponentMeta<typeof AuthFooter>;

const Template: ComponentStory<typeof AuthFooter> = () => <AuthFooter />;

export const Default = Template.bind({});

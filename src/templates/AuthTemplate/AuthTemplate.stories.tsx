import { AuthTemplate } from "./AuthTemplate";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AuthFooter } from "../../components/molecules/AuthFooter/AuthFooter";

export default {
  title: "Templates/AuthTemplate",
  component: AuthTemplate,
} as ComponentMeta<typeof AuthTemplate>;

const Template: ComponentStory<typeof AuthTemplate> = () => (
  <AuthTemplate
    authCard={<div className="bg-gray-800 rounded w-[32rem] h-[32rem]" />}
    footer={<AuthFooter />}
  />
);

export const Default = Template.bind({});

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LogInPage } from "./LogInPage";

export default {
  title: "Pages/LogIn",
  component: LogInPage,
} as ComponentMeta<typeof LogInPage>;

const Template: ComponentStory<typeof LogInPage> = () => <LogInPage />;

export const Default = Template.bind({});

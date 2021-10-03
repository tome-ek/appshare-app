import { Header } from "./Header";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <div className="w-[calc(100vw-2rem)]">
    <div className="container mx-auto max-w-screen-sm">
      <Header />
    </div>
  </div>
);

export const Default = Template.bind({});

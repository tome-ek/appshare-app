import { Code } from "./Code";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Code",
  component: Code,
} as ComponentMeta<typeof Code>;

// eslint-disable-next-line react/prop-types
const Template: ComponentStory<typeof Code> = ({ children, ...args }) => (
  <Code {...args}>{children}</Code>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>$ git clone --bare https://github.com/exampleuser/old-repository.git</>
  ),
};

import { Link } from "./Link";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

// eslint-disable-next-line react/prop-types
const Template: ComponentStory<typeof Link> = ({ children, ...args }) => (
  <Link {...args}>{children}</Link>
);

export const Default = Template.bind({});
Default.args = {
  to: "/#",
  children: <>Sign in now.</>,
};

export const DefaultActive = Template.bind({});
DefaultActive.args = {
  to: "/#",
  children: <>Sign in now.</>,
};

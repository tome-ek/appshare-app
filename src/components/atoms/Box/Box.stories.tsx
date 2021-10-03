import { Box } from "./Box";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = () => <Box>This is a box.</Box>;

export const Primary = Template.bind({});

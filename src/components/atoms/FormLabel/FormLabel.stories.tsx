import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FormLabel as Component } from "./FormLabel";

export default {
  component: Component,
  title: "Atoms/FormLabel",
} as ComponentMeta<typeof Component>;

export const FormLabel: ComponentStory<typeof Component> = () => (
  <Component inputId="">Email</Component>
);

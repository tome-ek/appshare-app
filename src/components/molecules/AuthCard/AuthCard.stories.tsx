import { AuthCard as AuthCardComponent } from "./AuthCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: AuthCardComponent,
  title: "Molecules/Authcard",
} as ComponentMeta<typeof AuthCardComponent>;

export const Authcard: ComponentStory<typeof AuthCardComponent> = () => (
  <AuthCardComponent>This is an auth card.</AuthCardComponent>
);

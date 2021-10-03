import { Divider as DividerComponent } from "./Divider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: DividerComponent,
  title: "Atoms/Divider",
} as ComponentMeta<typeof DividerComponent>;

export const Divider: ComponentStory<typeof DividerComponent> = () => (
  <div className="bg-gray-850 p-5 rounded">
    <p className="mb-4">I am above the divider and I have bottom margin</p>
    <DividerComponent />
    <p className="mt-4">I am below the divider and I have top margin</p>
  </div>
);

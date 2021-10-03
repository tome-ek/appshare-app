import { Input } from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HiLockClosed } from "react-icons/hi";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: "Atoms/Input",
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          basic: "",
          label: "",
          icon: "",
          invalid: "",
        },
      });
      return (
        <FormProvider {...methods}>
          <form>
            <Story />
          </form>
        </FormProvider>
      );
    },
  ],
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: "input",
  name: "basic",
  type: "email",
  autoComplete: "email",
  placeholder: "example@domain.com",
};

export const Label = Template.bind({});
Label.args = {
  id: "input",
  name: "label",
  label: "Email",
  type: "email",
  autoComplete: "email",
  placeholder: "example@domain.com",
};

export const Icon = Template.bind({});
Icon.args = {
  id: "input",
  name: "icon",
  label: "Password",
  type: "password",
  placeholder: "Your password",
  icon: HiLockClosed,
};

export const Invalid = Template.bind({});
Invalid.args = {
  id: "input",
  name: "invalid",
  label: "Password",
  type: "password",
  placeholder: "Your password",
  error: "Password must be at least 6 characters long.",
  icon: HiLockClosed,
};

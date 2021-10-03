import * as yup from "yup";

export type ForgotPasswordFormInput = {
  email: string;
};

export const forgotPasswordFormSchema = yup.object({
  email: yup.string().required("Please don't leave the email empty."),
});

export const defaultValues: ForgotPasswordFormInput = {
  email: "",
};

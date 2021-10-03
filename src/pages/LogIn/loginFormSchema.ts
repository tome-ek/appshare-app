import * as yup from "yup";

export type LogInFormInput = {
  email: string;
  password: string;
};

export const logInFormSchema = yup.object({
  email: yup.string().required("Please don't leave the email empty."),
  password: yup.string().required("Please don't leave the password empty."),
});

export const defaultValues: LogInFormInput = {
  email: "",
  password: "",
};

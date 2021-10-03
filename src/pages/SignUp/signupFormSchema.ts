import * as yup from "yup";

export type SignUpFormInput = {
  email: string;
  password: string;
  betaCode: string;
  hasAcceptedTerms: true | undefined;
};

export const signupFormSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please don't leave the email empty."),
  password: yup
    .string()
    .required("Please don't leave the password empty.")
    .min(6, "Make your password stronger by using 6 or more characters."),
  betaCode: yup
    .string()
    .required("An invitation code is required at this moment."),
  hasAcceptedTerms: yup.boolean().isTrue("Please consent to spam."),
});

export const defaultValues: SignUpFormInput = {
  email: "",
  password: "",
  betaCode: "",
  hasAcceptedTerms: undefined,
};

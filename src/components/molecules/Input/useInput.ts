import { useFormContext } from "react-hook-form";

export const useInput = (inputName: string) => {
  const {
    register,
    formState: { touchedFields, errors, isSubmitted },
  } = useFormContext();

  return {
    register,
    shouldDisplayError:
      (!!touchedFields[inputName] || isSubmitted) && !!errors[inputName],
  };
};

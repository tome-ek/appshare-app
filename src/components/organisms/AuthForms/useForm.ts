import { useFormContext } from "react-hook-form";

export const useForm = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return { handleSubmit, errors };
};

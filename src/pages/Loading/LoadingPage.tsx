import { Spinner } from "../../components/atoms/Spinner/Spinner";

export const LoadingPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

import { FC } from "react";
import { Box } from "../../atoms/Box/Box";

export const AuthCard: FC = ({ children }) => {
  return (
    <Box
      elevation={1}
      className="flex-1 md:flex-initial py-8 md:py-10 px-5 md:px-20 md:w-[36rem]  text-center"
    >
      {children}
    </Box>
  );
};

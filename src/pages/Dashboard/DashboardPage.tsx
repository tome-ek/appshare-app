import { getAuth } from "@firebase/auth";
import { Box } from "../../components/atoms/Box/Box";
import { Blankslate } from "../../components/organisms/Blankslate/Blankslate";

export const DashboardPage = () => {
  const handleCtaClicked = () => {
    getAuth().signOut();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Box elevation={1} className="py-10 w-[36rem]">
        <Blankslate
          title="Welcome to appshare"
          text="Now log out."
          cta="Log out"
          onCtaClick={handleCtaClicked}
        />
      </Box>
    </div>
  );
};

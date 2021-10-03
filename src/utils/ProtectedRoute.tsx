import { FC, useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { FirebaseContext } from "./FirebaseContext";

export const ProtectedRoute: FC<RouteProps> = (props) => {
  const { user, isLoading } = useContext(FirebaseContext);

  return (
    <>
      {!isLoading && user && <Route {...props} />}
      {!isLoading && !user && <Redirect to="/get-started" />}
    </>
  );
};

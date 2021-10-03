import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { ForgotPasswordPage } from "./pages/ForgotPassword/ForgotPasswordPage";
import { LoadingPage } from "./pages/Loading/LoadingPage";
import { LogInPage } from "./pages/LogIn/LogInPage";
import { SignUpPage } from "./pages/SignUp/SignUpPage";
import { FirebaseContext } from "./utils/FirebaseContext";
import { ProtectedRoute } from "./utils/ProtectedRoute";

const App = () => {
  const { isLoading } = useContext(FirebaseContext);

  return (
    <>
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <Switch>
          <Route path="/get-started" component={SignUpPage} />
          <Route path="/log-in" component={LogInPage} />
          <Route path="/reset-password" component={ForgotPasswordPage} />
          <ProtectedRoute path="/dashboard" component={DashboardPage} />
          <Redirect from="/" to="/get-started" />
        </Switch>
      )}
    </>
  );
};

export default App;

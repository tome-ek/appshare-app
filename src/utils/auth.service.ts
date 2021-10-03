import { post } from "./http";
import { makeFirebaseService } from "./firebase.service";
import { SignUpFormInput } from "../pages/SignUp/signupFormSchema";
import { LogInFormInput } from "../pages/LogIn/loginFormSchema";

export interface AuthService {
  signUp: (formInput: SignUpFormInput) => Promise<void>;
  logIn: (formInput: LogInFormInput) => Promise<void>;
}

export const makeAuthService = (): AuthService => {
  const firebaseService = makeFirebaseService();

  return {
    signUp: async (formInput) => {
      try {
        const firebaseId = await firebaseService.signUp(formInput);
        await post(`${process.env.REACT_APP_API_URL}/accounts`, {
          firebaseId,
          betaCode: formInput.betaCode,
        });
      } catch (error) {
        await firebaseService.deleteUser();

        throw error;
      }
    },
    logIn: async (formInput) => {
      await firebaseService.logIn(formInput);
    },
  };
};

import { FirebaseError } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  deleteUser as firDeleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  FirebaseAuthErrorCodes,
  isSilentFirebaseError,
  userMessageFromErrorCode,
} from "./firebase.errors";
import { SignUpFormInput } from "../pages/SignUp/signupFormSchema";
import { LogInFormInput } from "../pages/LogIn/loginFormSchema";

export interface FirebaseService {
  signUp: (formInput: SignUpFormInput) => Promise<string>;
  logIn: (formInput: LogInFormInput) => Promise<string>;
  deleteUser: () => Promise<void>;
}

export const makeFirebaseService = (): FirebaseService => {
  return {
    signUp: async (formInput) => {
      try {
        const firebase = getAuth();

        const firebaseCredential = await createUserWithEmailAndPassword(
          firebase,
          formInput.email,
          formInput.password
        );

        return firebaseCredential.user?.uid || "";
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (
            FirebaseAuthErrorCodes.includes(error.code) &&
            !isSilentFirebaseError(error.code)
          ) {
            throw new Error(userMessageFromErrorCode(error.code));
          }
        }

        throw Error("Generic error");
      }
    },
    deleteUser: async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        return firDeleteUser(user);
      }
    },
    logIn: async (formInput) => {
      try {
        const firebase = getAuth();

        const firebaseCredential = await signInWithEmailAndPassword(
          firebase,
          formInput.email,
          formInput.password
        );

        return firebaseCredential.user?.uid || "";
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (
            FirebaseAuthErrorCodes.includes(error.code) &&
            !isSilentFirebaseError(error.code)
          ) {
            throw new Error(userMessageFromErrorCode(error.code));
          }
        }

        throw Error("Generic error");
      }
    },
  };
};

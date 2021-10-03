import { createContext } from "react";
import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";

export type FirebaseContextType = {
  isLoading: boolean;
  firebase: FirebaseApp | undefined;
  user: User | null;
};

export const FirebaseContext = createContext<FirebaseContextType>(
  {} as FirebaseContextType
);

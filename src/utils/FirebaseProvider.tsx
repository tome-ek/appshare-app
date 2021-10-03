import { FC, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";

export const FirebaseProvider: FC = ({ children }) => {
  const [firebase, setFirebase] = useState<FirebaseApp | undefined>(undefined);
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIR_API_KEY,
    };
    const app = initializeApp(firebaseConfig);

    setFirebase(app);
  }, [setFirebase]);

  useEffect(() => {
    if (!firebase) {
      return;
    }

    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      setFirebaseUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [firebase, setFirebaseUser, setIsLoading]);

  return (
    <FirebaseContext.Provider
      value={{
        firebase: firebase,
        user: firebaseUser,
        isLoading: isLoading,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

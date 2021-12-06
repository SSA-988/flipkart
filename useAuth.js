import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext({});

const config = {
  androidClientId:
    "44514265808-eeu92vma5vss05v5h6h5csu5e19jpan3.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const logout = () => {
    setLoad(true);
    signOut(auth).catch((error) => setError(error));
    setLoad(false);
  };
  const signInWithGoogle = async () => {
    setLoad(true);
    await Google.logInAsync(config)
      .then(async (loginResult) => {
        if (loginResult.type === "success") {
          const { idToken, accessToken } = loginResult;
          const credentials = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credentials);
        }

        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoad(false));
  };

  const memoedvalue = useMemo(
    () => ({
      user,
      load,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, load, error]
  );

  return (
    <AuthContext.Provider value={memoedvalue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

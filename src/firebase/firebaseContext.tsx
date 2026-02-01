import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, getDatabase, onValue, ref } from "firebase/database";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import firebaseConfig from "./firebaseConfig";
import { Recipe } from "../types";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";

const noopAsync = () => {
  return Promise.resolve(undefined);
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

interface FirebaseApi {
  app: FirebaseApp;
  database: Database;
  auth: {
    signInWithGoogle: () => Promise<UserCredential | undefined>;
    logout: () => Promise<void>;
  };
}

export const FirebaseContext = createContext<FirebaseApi>({
  app,
  database,
  auth: { signInWithGoogle: noopAsync, logout: noopAsync },
});

type FirebaseProviderProps = PropsWithChildren<{
  onUsername?: (username: string | null) => void;
  onDataChange?: (data: Recipe[]) => void;
}>;

const FirebaseProvider = ({
  children,
  onUsername,
  onDataChange,
}: FirebaseProviderProps) => {
  const setRecipeListener = useCallback(() => {
    const recipesRef = ref(database, "recipes");
    return onValue(recipesRef, (snapshot) => {
      const recipes = snapshot.val() as Recipe[];
      onDataChange?.(recipes);
    });
  }, [onDataChange]);

  useEffect(() => {
    const unsubscribe = setRecipeListener();
    return () => {
      unsubscribe();
    };
  }, [setRecipeListener]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        onUsername?.(user.displayName);
      } else {
        onUsername?.(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [onUsername]);

  const signInWithGoogle = useCallback(async () => {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
  }, []);

  const value = useMemo(
    () => ({
      app,
      database,
      auth: { signInWithGoogle, logout },
    }),
    [signInWithGoogle, logout],
  );

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

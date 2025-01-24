import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, getDatabase, onValue, ref } from "firebase/database";
import { createContext, PropsWithChildren, useCallback } from "react";
import { setData, startLoading } from "../store/slices/recipesSlice";
import { prepareData } from "./helpers";
import firebaseConfig from "./firebaseConfig";
import { useAppDispatch } from "../store/store";
import { Recipe } from "../types";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import { clearUsername, setUsername } from "../store/slices/authSlice";
import { noop } from "lodash";

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
  api: {
    setRecipeListener: () => void;
  };
  auth: {
    signInWithGoogle: () => Promise<UserCredential | undefined>;
    logout: () => Promise<void>;
  };
}

export const FirebaseContext = createContext<FirebaseApi>({
  app,
  database,
  api: { setRecipeListener: noop },
  auth: { signInWithGoogle: noopAsync, logout: noopAsync },
});

const FirebaseProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const setRecipeListener = useCallback(() => {
    dispatch(startLoading());
    const recipesRef = ref(database, "recipes");
    onValue(recipesRef, (snapshot) => {
      const recipes = snapshot.val() as Recipe[];
      const data = prepareData(recipes);
      dispatch(setData(data));
    });
  }, [dispatch]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUsername(user.displayName));
    } else {
      dispatch(clearUsername());
    }
  });

  const signInWithGoogle = async () => {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  async function logout() {
    await signOut(auth);
  }

  return (
    <FirebaseContext.Provider
      value={{
        app,
        database,
        api: { setRecipeListener },
        auth: { signInWithGoogle, logout },
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, getDatabase, onValue, ref } from "firebase/database";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { setData, startLoading } from "../store/slices/recipesSlice";
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
import { noop } from "lodash";
import { UserContext } from "@/components/context/userContext";
import { prepareData } from "@/lib/helpers";
import { useAppDispatch } from "@/store/store";

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
  const { setUsername, clearUsername } = useContext(UserContext);
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
      setUsername(user.displayName);
    } else {
      clearUsername();
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

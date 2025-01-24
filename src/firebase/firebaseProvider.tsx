import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import firebaseConfig from "./firebaseConfig";
import { setData, startLoading } from "../store/slices/recipesSlice";
import { prepareData } from "./helpers";
import { setUsername, clearUsername } from "../store/slices/authSlice";
import { FirebaseApi } from "./types";
// import FirebaseContext from "./firebaseContext";

export const FirebaseContext = createContext<FirebaseApi>({
  app: null,
  database: null,
  auth: null,
  api: null,
  init: null,
});

const FirebaseProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const googleProvider = useMemo(() => new GoogleAuthProvider(), []);

  const [app, setApp] = useState<FirebaseApi["app"]>(null);
  const [database, setDatabase] = useState<FirebaseApi["database"]>(null);
  const [auth, setAuth] = useState<FirebaseApi["auth"]>(null);
  const [api, setApi] = useState<FirebaseApi["api"]>(null);

  const setRecipeListener = useCallback(() => {
    console.log("setRecipeListener");
    console.log(database);
    if (!database) return;
    dispatch(startLoading());
    const recipesRef = ref(database, "recipes");
    onValue(recipesRef, (snapshot) => {
      const recipes = snapshot.val();
      const data = prepareData(recipes);
      dispatch(setData(data));
    });
  }, [database, dispatch]);

  const signInWithGoogle = useCallback(async () => {
    console.log(auth);
    try {
      if (!auth) return;
      return signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }, [auth, googleProvider]);

  const logout = useCallback(async () => {
    if (!auth) return;
    await signOut(auth);
  }, [auth]);

  const init = useCallback(() => {
    // useEffect(() => {
    if (!getApps().length) {
      const newApp = initializeApp(firebaseConfig);
      setApp(newApp);
      const newAuth = getAuth(newApp);
      setAuth(newAuth);
      setDatabase(getDatabase());
      setApi({
        setRecipeListener,
        auth: { signInWithGoogle, logout },
      });
      onAuthStateChanged(newAuth, (user) => {
        if (user) {
          dispatch(setUsername(user.displayName));
        } else {
          dispatch(clearUsername());
        }
      });
    }
    // }, [app, auth, dispatch, logout, setRecipeListener, signInWithGoogle]);
  }, [dispatch, logout, setRecipeListener, signInWithGoogle]);

  return (
    <FirebaseContext.Provider value={{ app, database, auth, api, init }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

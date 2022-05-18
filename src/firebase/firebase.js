import React, { createContext } from "react";
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

const FirebaseContext = createContext();
export { FirebaseContext };

let firebase = {
  app: null,
  database: null,
};

const FirebaseProvider = ({ children }) => {
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();

  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase();
    firebase = {
      app: app,
      database: db,
      auth,
      api: {
        setRecipeListener,
        auth: { signInWithGoogle, logout },
      },
    };
  }

  function setRecipeListener() {
    dispatch(startLoading());
    const recipesRef = ref(firebase.database, "recipes");
    onValue(recipesRef, (snapshot) => {
      const recipes = snapshot.val();
      const data = prepareData(recipes);
      dispatch(setData(data));
    });
  }

  onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("Not logged in");
    }
  });

  async function signInWithGoogle() {
    try {
      await signInWithPopup(firebase.auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    await signOut(firebase.auth);
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

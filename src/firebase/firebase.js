import React, { createContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
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

  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();
    firebase = {
      app: app,
      database: db,
      api: {
        setRecipeListener,
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

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

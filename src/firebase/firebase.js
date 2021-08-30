import React, { createContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";

import firebaseConfig from "./firebaseConfig";
import { setRecipes, startLoading, stopLoading } from "../store/actions/index";

const FirebaseContext = createContext(null);
export { FirebaseContext };

export default ({ children }) => {
  let firebase = {
    app: null,
    database: null,
  };

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
      const vals = snapshot.val();
      dispatch(setRecipes(vals));
      dispatch(stopLoading());
    });
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

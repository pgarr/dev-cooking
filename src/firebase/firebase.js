import React, { createContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";

import firebaseConfig from "./firebaseConfig";
import {
  setRecipes,
  startLoading,
  stopLoading,
  setIngredients,
} from "../store/actions/index";
import { getUniqueIngredients } from "./helpers";

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
      dispatch(setRecipes(recipes));
      dispatch(stopLoading());
      const ingredients = getUniqueIngredients(recipes);
      dispatch(setIngredients(ingredients));
    });
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

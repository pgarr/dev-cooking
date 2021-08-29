import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faPlus,
  faStar as fasFaStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

import Layout from "../Layout/Layout";
import RoutesList from "./RoutesList";
import { FirebaseContext } from "../../firebase/firebase";

const App = () => {
  // awesome icons library
  library.add(faClock, faPlus, farFaStar, fasFaStar, faUser);

  const { api } = useContext(FirebaseContext);

  useEffect(() => {
    api.setRecipeListener();
  });

  return (
    <Layout>
      <RoutesList />
    </Layout>
  );
};

export default withRouter(App);

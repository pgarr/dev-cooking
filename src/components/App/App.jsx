import { useContext, useEffect } from "react";

import Layout from "./Layout";
import RoutesList from "./RoutesList";
import { FirebaseContext } from "../../firebase/firebase";

const App = () => {
  // Firebase setup
  const { api } = useContext(FirebaseContext);
  useEffect(() => {
    api.setRecipeListener();
  }, [api]);

  return (
    <Layout>
      <RoutesList />
    </Layout>
  );
};

export default App;

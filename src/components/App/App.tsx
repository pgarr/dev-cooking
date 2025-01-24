import { useContext, useEffect } from "react";

import Layout from "./Layout";
import RoutesList from "./RoutesList";
import { FirebaseContext } from "../../firebase/firebase";

const App = () => {
  // Firebase setup
  const firebaseApi = useContext(FirebaseContext);
  useEffect(() => {
    firebaseApi.api.setRecipeListener();
  }, [firebaseApi]);

  return (
    <Layout>
      <RoutesList />
    </Layout>
  );
};

export default App;

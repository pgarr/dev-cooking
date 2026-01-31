import { useContext, useEffect } from "react";

import Layout from "../components/hoc/layout";
import RoutesList from "./routes";
import { FirebaseContext } from "../firebase/firebaseContext";

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

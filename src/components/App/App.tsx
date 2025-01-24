import { useContext, useEffect } from "react";

import Layout from "./Layout";
import RoutesList from "./RoutesList";
import { FirebaseContext } from "../../firebase/firebaseProvider";

const App = () => {
  // Firebase setup
  const { api, init } = useContext(FirebaseContext);
  useEffect(() => {
    if (!init) return;
    console.log("init");
    init();
  }, [init]);

  console.log(api);
  useEffect(() => {
    if (!api) return;
    api.setRecipeListener();
  }, [api]);

  return (
    <Layout>
      <RoutesList />
    </Layout>
  );
};

export default App;

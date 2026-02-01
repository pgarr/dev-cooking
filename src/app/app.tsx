import FirebaseProvider from "@/firebase/firebaseContext";
import Layout from "../components/hoc/layout";
import RoutesList from "./routes";
import { useContext } from "react";
import { UserContext, UserProvider } from "@/components/context/userContext";
import {
  RecipesContext,
  RecipesProvider,
} from "@/components/context/recipesContext";
import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from "@/components/context/filtersContext";

const App = () => {
  const { setUsername } = useContext(UserContext);
  const { setData } = useContext(RecipesContext);

  return (
    <FirebaseProvider onUsername={setUsername} onDataChange={setData}>
      <Layout>
        <RoutesList />
      </Layout>
    </FirebaseProvider>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <RecipesProvider>
          <FiltersProvider>
            <App />
          </FiltersProvider>
        </RecipesProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;

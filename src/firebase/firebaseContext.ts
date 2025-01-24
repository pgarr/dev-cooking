import { createContext } from "react";
import { FirebaseApi } from "./types";

const FirebaseContext = createContext<FirebaseApi>({
  app: null,
  database: null,
  auth: null,
  api: null,
});

export default FirebaseContext;

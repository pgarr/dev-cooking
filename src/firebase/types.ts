import { FirebaseApp } from "firebase/app";
import { Database } from "firebase/database";
import { Auth, UserCredential } from "firebase/auth";

export interface FirebaseApi {
  app: FirebaseApp | null;
  database: Database | null;
  auth: Auth | null;
  api: {
    setRecipeListener: () => void;
    auth: {
      signInWithGoogle: () => Promise<UserCredential | undefined>;
      logout: () => Promise<void>;
    };
  } | null;
  init: (() => void) | null;
}

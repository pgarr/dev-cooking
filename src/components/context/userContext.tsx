import { noop } from "lodash";
import { createContext, PropsWithChildren, useState } from "react";

interface UserContextType {
  setUsername: (username: string | null) => void;
  clearUsername: () => void;
  username: string | null;
}

export const UserContext = createContext<UserContextType>({
  setUsername: noop,
  clearUsername: noop,
  username: null,
});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        setUsername,
        clearUsername: () => {
          setUsername(null);
        },
        username,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

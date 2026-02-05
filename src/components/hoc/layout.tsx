import { PropsWithChildren } from "react";
import Toolbar from "../fragments/toolbar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Toolbar />
    <div className="mt-10 px-3 md:px-15 lg:px-40">{children}</div>
  </>
);

export default Layout;

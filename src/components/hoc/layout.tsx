import { PropsWithChildren } from "react";
import Toolbar from "../fragments/toolbar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Toolbar />
    <div className="mt-10 px-2.5 md:px-20 lg:px-40">{children}</div>
  </>
);

export default Layout;

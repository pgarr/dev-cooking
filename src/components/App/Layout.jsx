import { Flip, ToastContainer } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import Toolbar from "../UI/Toolbar";

const Content = styled.div`
  margin: 40px auto 0px;
  max-width: 1200px;
  padding: 0 10px 0;
`;

const Layout = ({ children }) => (
  <>
    <Toolbar />
    <Content>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
      {children}
    </Content>
  </>
);

export default Layout;

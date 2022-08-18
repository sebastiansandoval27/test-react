import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Content, LayoutComp } from "./layout.style";

const Layout = ({ children }) => {
  return (
    <LayoutComp>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </LayoutComp>
  );
};

export default Layout;

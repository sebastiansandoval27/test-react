import React from "react";
import Header from "../Header/Header";
import { Content, LayoutComp } from "./layout.style";

const Layout = ({ children }) => {
  return (
    <LayoutComp>
      <Header />
      <Content>{children}</Content>
    </LayoutComp>
  );
};

export default Layout;

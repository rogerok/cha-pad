import React from "react";
import { Outlet } from "react-router";

import Header from "../header/header.component";

import { LayoutContainer } from "./layout-styles";

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

export default Layout;

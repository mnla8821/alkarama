import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Pages";
import { History, News, Contact, Matches, Landing, About } from "./Pages";
//Oulet = children
const Root = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;

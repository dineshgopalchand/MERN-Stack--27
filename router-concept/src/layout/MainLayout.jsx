
import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/not-found/NotFound";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        {/* <Home /> */}
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

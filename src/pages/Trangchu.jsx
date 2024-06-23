import React, { useEffect, useState, useContext } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import Home from '../layout/home.jsx';
import { TravelMenu } from "../constant/context.js";

const TrangChu = () => {

  useEffect(() => {
    document.title = "Travel";
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default TrangChu;
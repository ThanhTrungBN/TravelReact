import React, { useEffect, useState,useContext } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import PayTest from "../layout/vnpay.jsx";
const Thanhtoan = () => {
  useEffect(() => {
    document.title = "Pay";
  }, []);

  return (
      <div className="main">
        <Header />
        <PayTest />
        <Footer />
      </div>
  );
};

export default Thanhtoan;
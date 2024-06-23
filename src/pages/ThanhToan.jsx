import React, { useEffect, useState,useContext } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import Home from '../layout/home.jsx';
import Pay from "../layout/pay.jsx";
import { TravelMenu } from "../constant/context.js";
import { DiadiemMB, DiadiemMT, DiadiemMTNB, DiadiemMDNB } from '../services/location.services.js'
import { loadNguoidungbyID ,AuthContext} from '../services/login.services.js'
import PayTest from "../layout/paytest.jsx";
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
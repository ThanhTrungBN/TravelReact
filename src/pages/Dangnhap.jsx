import React, { useEffect, useState } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import Home from '../layout/home.jsx';
import Travel from "../layout/travel.jsx";
import Login from "../layout/login.jsx";
import { TravelMenu } from "../constant/context.js";
import { DiadiemMB, DiadiemMT, DiadiemMTNB, DiadiemMDNB } from '../services/location.services.js'


const Dangnhap = () => {



  useEffect(() => {
    document.title = "Đăng Nhập";
  }, []);

  return (

    <div className="main">
      <Header />
      <Login />
      <Footer />
    </div>

  );
};

export default Dangnhap;
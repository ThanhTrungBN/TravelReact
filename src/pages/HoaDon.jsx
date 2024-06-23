import React, { useEffect, useState, useContext } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import { TravelMenu } from "../constant/context.js";
import { DiadiemMB, DiadiemMT, DiadiemMTNB, DiadiemMDNB } from '../services/location.services.js'
import { loadNguoidungbyID, AuthContext } from '../services/login.services.js'
import Booking from "../layout/booking.jsx";
const HoaDon = () => {
  useEffect(() => {
    document.title = "Pay";
  }, []);
 
  return (

    <div className="main">
      <Header />
      <Booking />
      <Footer />
    </div>

  );
};

export default HoaDon;
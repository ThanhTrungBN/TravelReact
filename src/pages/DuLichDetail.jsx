import React, { useEffect,useState,useContext } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import Home from '../layout/home.jsx';
import TravelDetail from "../layout/traveldetails.jsx";
import { TravelMenu } from "../constant/context.js";
import {DiadiemMB,DiadiemMT,DiadiemMTNB,DiadiemMDNB} from '../services/location.services.js'
import { loadNguoidungbyID ,AuthContext} from '../services/login.services.js'
const DelichDetail = () => {
  
  useEffect(() => {
    document.title = "Travel";
  }, []);

  return (
    <div className="main">
        <Header />
        <TravelDetail />
        <Footer />
    </div>
  );
};

export default DelichDetail;
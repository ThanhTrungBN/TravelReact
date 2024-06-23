import React, { useEffect, useState, useContext } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import SideBar from '../components/sidebar.jsx';
import Profile from "../layout/profile.jsx";
import Order from "../layout/order.jsx";
import { TravelMenu } from "../constant/context.js";
import { DiadiemMB, DiadiemMT, DiadiemMTNB, DiadiemMDNB } from '../services/location.services.js'
import { loadNguoidungbyID, AuthContext } from '../services/login.services.js'
import Orderdetail from "../layout/orderdetail.jsx";
const DonTourdetail = () => {

    
    useEffect(() => {
        document.title = "Cá Nhân";
    }, []);

    return (

        <div>
  
            <div className="main">
                <Header />
                <Orderdetail />
                <Footer />
            </div>

        </div>
    );
};

export default DonTourdetail;
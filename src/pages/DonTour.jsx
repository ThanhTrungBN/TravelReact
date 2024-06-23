import React, { useEffect, useState, useContext } from "react";
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import SideBar from '../components/sidebar.jsx';
import Profile from "../layout/profile.jsx";
import Order from "../layout/order.jsx";
import { TravelMenu } from "../constant/context.js";
import { DiadiemMB, DiadiemMT, DiadiemMTNB, DiadiemMDNB } from '../services/location.services.js'
import { loadNguoidungbyID, AuthContext } from '../services/login.services.js'
const Tour = () => {


    useEffect(() => {
        document.title = "Cá Nhân";
    }, []);

    return (

        <div>

            <Header />
            <div className="profile">
                <div className="container">
                    <div className="row py-4">
                        <SideBar />
                        <Order />
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default Tour;
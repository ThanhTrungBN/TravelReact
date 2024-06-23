import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminTourdetailcr from "../layout/AdminTourdetailcr.jsx"
const QuantriTourdetail = () => {

    useEffect(() => {
        document.title = "Quan Tri";

    }, []);

    return (

        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminTourdetailcr />
            </div>
        </div>
    );
};

export default QuantriTourdetail;
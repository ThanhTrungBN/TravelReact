import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminTourdetail from "../layout/AdminTourdetail.jsx";
import AdminThongke from "../layout/AdminThongke.jsx";
const QuantriThongke = () => {

    useEffect(() => {
        document.title = "Quan Tri";

    }, []);

    return (
        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminThongke />
            </div>
        </div>
    );
};

export default QuantriThongke;
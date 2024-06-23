import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminLichtrinhup from "../layout/AdminLichtrinhup.jsx";
const QuantriLichtrinhup = () => {

    useEffect(() => {
        document.title = "Quan Tri";

    }, []);

    return (

        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminLichtrinhup />
            </div>
        </div>

    );
};

export default QuantriLichtrinhup;
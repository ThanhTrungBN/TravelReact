import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import {  AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminLichtrinhcr from "../layout/AdminLichtrinhcr.jsx";
const QuantriLichtrinhcr = () => {

    useEffect(() => {
        document.title = "Quan Tri";

    }, []);

    return (
        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminLichtrinhcr />
            </div>
        </div>
    );
};

export default QuantriLichtrinhcr;
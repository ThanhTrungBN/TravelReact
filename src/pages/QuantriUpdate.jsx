import React, { useEffect,useState,useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminUpdate from "../layout/AdminUpdate.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
const QuantriUpdate = () => {

    useEffect(() => {
        document.title = "Quan Tri";
    }, []);

    return (
        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminUpdate />
            </div>
        </div>

    );
};

export default QuantriUpdate;
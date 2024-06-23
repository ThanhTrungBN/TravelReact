import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminCreate from "../layout/AdminCreate.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
const QuantriCreate = () => {
  
    useEffect(() => {
        document.title = "Quan Tri";     
    }, []);

    return (

            <div className="main">
                <div className="wrapper" style={{ display: 'flex' }}>
                    <AdminSidebar />
                    <AdminCreate />
                </div>
            </div>

    );
};

export default QuantriCreate;
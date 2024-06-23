import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminSearch from "../layout/AdminHome.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
const Quantri = () => {
  
    useEffect(() => {
        document.title = "Quan Tri";       
    }, []);

    return (
    
            <div className="main">
                <div className="wrapper" style={{ display: 'flex' }}>
                    <AdminSidebar />
                    <AdminSearch />
                </div>
            </div>
  
    );
};

export default Quantri;
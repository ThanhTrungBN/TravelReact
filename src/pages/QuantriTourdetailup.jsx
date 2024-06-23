import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminUpdate from "../layout/AdminUpdate.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminTourdetailup from "../layout/AdminTourdetailUp.jsx";
const QuantriTourdetailup = () => {

    useEffect(() => {
        document.title = "Quan Tri";
    }, []);

    return (

        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminTourdetailup />
            </div>
        </div>

    );
};

export default QuantriTourdetailup;
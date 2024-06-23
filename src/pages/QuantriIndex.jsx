import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminTour from "../layout/AdminTour.jsx";
const QuantriIdex = () => {

    useEffect(() => {
        document.title = "Quan Tri";

    }, []);

    return (

        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminTour />
            </div>
        </div>

    );
};

export default QuantriIdex;
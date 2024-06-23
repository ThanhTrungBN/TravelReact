import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminCus from "../layout/AdminCus.jsx";
const QuantriCus = () => {

    useEffect(() => {
        document.title = "Quan Tri";

    }, []);

    return (

        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminCus />
            </div>
        </div>

    );
};

export default QuantriCus;
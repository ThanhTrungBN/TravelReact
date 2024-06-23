import React, { useEffect,useState,useContext} from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminOrder from "../layout/AdminOrder.jsx";
const QuantriOrder = () => {
 
    useEffect(() => {
        document.title = "Quan Tri";
    }, []);

    return (
        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminOrder />
            </div>
        </div>
    );
};

export default QuantriOrder;
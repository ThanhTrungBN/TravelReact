import React, { useEffect,useState,useContext} from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { loadNguoidungbyID, AuthContext } from "../services/login.services.js";
import { TravelMenu } from "../constant/context.js";
import AdminLichTrinh from "../layout/AdminLichtrinh.jsx";
const QuantriLichtrinh = () => {
   
    useEffect(() => {
        document.title = "Quan Tri";
    }, []);

    return (

        <div className="main">
            <div className="wrapper" style={{ display: 'flex' }}>
                <AdminSidebar />
                <AdminLichTrinh />
            </div>
        </div>
 
    );
};

export default QuantriLichtrinh;
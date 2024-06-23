import React from 'react';
import { useState, useEffect, useContext } from 'react';
import useFetchData from '../hooks/fetchdata';
export const TravelMenu = React.createContext({
    MB: [],
    MT: [],
    MDNB: [],
    MTNB: [],
    User: [],
    mataikhoan: null,
    setAcc: () => { },
    manguoidung: null,
    setUser: () => { },
    logout: () => { }
});

const TravelMenuProvider = ({ children }) => {

    const { MB, MT, MDNB, MTNB, User } = useFetchData();
    const [mataikhoan, setAcc] = useState(() => {
        const savedAcc = localStorage.getItem('mataikhoan');
        return savedAcc ? JSON.parse(savedAcc) : null;
    });
    const [manguoidung, setUser] = useState(() => {
        const savedUser = localStorage.getItem('manguoidung');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const logout = () => {
        localStorage.removeItem('mataikhoan');
        localStorage.removeItem('manguoidung');
        setAcc(null);
    };
    
    return (
        <TravelMenu.Provider value={{ MB, MT, MDNB, MTNB, User, mataikhoan, setAcc, manguoidung, setUser, logout }}>
            {children}
        </TravelMenu.Provider>
    );
};
export default TravelMenuProvider;


// src/hooks/useFetchData.js
import { useState, useEffect, useContext } from 'react';
import { DiadiemMB, DiadiemMT, DiadiemMDNB, DiadiemMTNB } from '../services/location.services'; 
import {loadNguoidungbyID} from '../services/login.services';
import { TravelMenu } from '../constant/context';

const useFetchData = () => {
    const [MB, setMenuMB] = useState([]);
    const [MT, setMenuMT] = useState([]);
    const [MDNB, setMenuMDNB] = useState([]);
    const [MTNB, setMenuMTNB] = useState([]);
    const [User, setUser] = useState([]);
    const { user } = useContext(TravelMenu);   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataMB = await DiadiemMB();
                setMenuMB(dataMB);
                const dataMT = await DiadiemMT();
                setMenuMT(dataMT);
                const dataMTNB = await DiadiemMTNB();
                setMenuMTNB(dataMTNB);
                const dataMDNB = await DiadiemMDNB();
                setMenuMDNB(dataMDNB);
                const dataUser = await loadNguoidungbyID(user);
                setUser(dataUser);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [user]);

    return { MB, MT, MDNB, MTNB, User };
};

export default useFetchData;

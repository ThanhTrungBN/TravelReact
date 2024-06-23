import { apiClient } from '../constant/api';
import { useContext, createContext, useState } from 'react';
import { TravelMenu } from '../constant/context';
import { useNavigate } from 'react-router-dom';
// export const AuthContext = createContext(null);
// // export const AuthProvider = ({ children }) => {
// //     const [mataikhoan, setAcc] = useState(() => {
// //         const savedAcc = localStorage.getItem('mataikhoan');
// //         return savedAcc ? JSON.parse(savedAcc) : null;
// //     });
// //     const [manguoidung, setUser] = useState(() => {
// //         const savedUser = localStorage.getItem('user');
// //         return savedUser ? JSON.parse(savedUser) : null;
// //     });
// //     const logout = () => {
// //         localStorage.removeItem('Acc');
// //         setAcc(null);
// //     };
// //     return (
// //         <AuthContext.Provider value={{ mataikhoan, setAcc,manguoidung,setUser,logout  }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };
const useSubmitLogin = () => {
    const { setAcc } = useContext(TravelMenu);
    const { setUser } = useContext(TravelMenu);
    const navigate = useNavigate();
    const submitLogin = async (username, password) => {
        try {
            const credentials = { username, password };
            const response = await apiClient.post('/api-nguoidung/User/login', credentials);
            if (response.data) {
                const { mataikhoan, per,manguoidung } = response.data;
                if(per ==="admin"){
                    navigate('/admin/index')
                }
                if(per ==="user"){
                    navigate('/')
                }
                localStorage.setItem('mataikhoan', JSON.stringify(mataikhoan));
                localStorage.setItem('manguoidung', manguoidung);               
                setAcc(mataikhoan);
                setUser(manguoidung);
            } else {
                throw new Error('Đăng nhập thất bại');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    };

    return submitLogin;
};
export const loadNguoidungbyID = async () => {
    const manguoidung = localStorage.getItem('manguoidung');
    try {
        const res = await apiClient.get(`/api/Nguoidung/get-user-id/${manguoidung}`);
        return res.data;
    } catch (error) {
        console.error('Error loading user:', error);
        throw error;
    }
};
const useSubmitLogout = () => {
    const { logout } = useContext(TravelMenu);
    const submitLogout = () => {
        logout();
    };
    return submitLogout;
};
export {
    useSubmitLogin,
};

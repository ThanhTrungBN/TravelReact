import { apiClient } from '../constant/api';

const DiadiemMB = async () => {
    try {
        const response = await apiClient.get('/api/Diadiem/get-by-diadiem-mb');

        return response.data;
    } catch (error) {
        throw error;
    }
};
const DiadiemMT = async () => {
    try {
        const response = await apiClient.get('/api/Diadiem/get-by-diadiem-mt');

        return response.data;
    } catch (error) {
        throw error;
    }
};
const DiadiemMDNB = async () => {
    try {
        const response = await apiClient.get('/api/Diadiem/get-by-diadiem-mdnb');

        return response.data;
    } catch (error) {
        throw error;
    }
};
const DiadiemMTNB = async () => {
    try {
        const response = await apiClient.get('/api/Diadiem/get-by-diadiem-mtnb');

        return response.data;
    } catch (error) {
        throw error;
    }
};
const DSTinh = async() =>{
    try {
        // Gọi API sử dụng axios
        const response = await apiClient.get('https://provinces.open-api.vn/api/?depth=1');

        return response.data;
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
}
const loadIDDD = async () => {
    try {
        const response = await apiClient.get('/api/Diadiem/get-by-DD');
        return response.data;
    } catch (error) {
        console.error('Error loading orders:', error);
        throw error;
    }
};
export {
    loadIDDD,
    DiadiemMB,
    DiadiemMDNB,
    DiadiemMTNB,
    DiadiemMT,
    DSTinh
};
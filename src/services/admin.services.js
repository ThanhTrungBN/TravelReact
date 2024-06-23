import { apiClient } from '../constant/api';

const loadTourMoi = async () => {
    try {
        const response = await apiClient.get('/api/Tour/get-by-tour');
        console.log('GET:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error loading tours:', error);
        throw error;
    }
};
const LoadTourDienra = async () => {
    try {
        const res = await apiClient.get('/api/Tour/get-by-tourdangdienra');
        console.log('Tour LoadTourUuDai successfully:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error loading discounts:', error);
        throw error;
    }
};
const Nguoidung = async () => {
    try {
        const res = await apiClient.get('/api/User/get-by-user');
        console.log('Tour LoadTourUuDai successfully:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error loading discounts:', error);
        throw error;
    }
};
const addTour = async (newTour) => {
    try {
        const response = await apiClient.post('/api/Tour/create-tour', newTour);
        console.log('Tour added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding tour:', error);
        throw error;
    }
};
const deleteTour = async (matour) => {
    try {
        const response = await apiClient.delete(`/api/Tour/delete-tour/${matour}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting tour:', error);
        throw error;
    }
};

const updateTour = async (updatedTour) => {
    try {
        const response = await apiClient.post('/api/Tour/update-tour', updatedTour);
        console.log('Tour updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating tour:', error);
        throw error;
    }
};
const updatePer = async (per) => {
    try {
        const response = await apiClient.post('/api/User/update-per', per);
        console.log('Tour updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating tour:', error);
        throw error;
    }
};

const loadNguoidungbyID = async () => {
    try {
        const mataikhoan = localStorage.getItem('mataikhoan');
        console.log(mataikhoan);
        const key = 'manguoidung';
        const value = window.location.search.substring(window.location.search.indexOf(key) + key.length + 1);
        localStorage.setItem('manguoidung', value);
        const response = await apiClient.get(`/api/Nguoidung/get-user-id/${value}`);
        return response.data;
    } catch (error) {
        console.error('Error loading user by ID:', error);
        throw error;
    }
};

const loadSoluongTour = async () => {
    try {
        const response = await apiClient.get('/api/Thongke/get-soluong-tour');
        return response.data;

    } catch (error) {
        console.error('Error loading tour count:', error);
        throw error;
    }
};


const loadSoluongAcc = async () => {
    try {
        const response = await apiClient.get('/api/Thongke/get-soluong-account');
        return response.data;
    } catch (error) {
        console.error('Error loading account count:', error);
        throw error;
    }
};

const loadSoluongOrder = async () => {
    try {
        const response = await apiClient.get('/api/Thongke/get-soluong-order');
        return response.data;
    } catch (error) {
        console.error('Error loading order count:', error);
        throw error;
    }
};
const Loaddoanhthuthang = async () => {
    try {
        const response = await apiClient.get('/api/Thongke/get-doanhthu-thang');
        return response.data;
    } catch (error) {
        console.error('Error loading order count:', error);
        throw error;
    }
};

export {
    updatePer,
    Loaddoanhthuthang,
    Nguoidung,
    LoadTourDienra,
    loadTourMoi,
    addTour,
    deleteTour,
    updateTour,
    loadNguoidungbyID,
    loadSoluongTour,
    loadSoluongAcc,
    loadSoluongOrder
};
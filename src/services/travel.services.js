import { apiClient } from '../constant/api';

export const loadTourMoi = async () => {
    try {
        const res = await apiClient.get('/api-nguoidung/Tour/get-by-tour');
        console.log('GET:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error loading tours:', error);
        throw error;
    }
};

export const loadTourDesc = async () => {
    try {
        const res = await apiClient.get('/api-nguoidung/Tour/get-by-tour-desc');
        console.log('GET:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error loading tours:', error);
        throw error;
    }
};

export const loadTourAsc = async () => {
    try {
        const res = await apiClient.get('/api-nguoidung/Tour/get-by-tour-asc');
        console.log('GET:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error loading tours:', error);
        throw error;
    }
};

export const loadTourUuDai = async () => {
    try {
        const res = await apiClient.get('/api-nguoidung/Tour/get-by-tour-uudai');
        console.log('Tour LoadTourUuDai successfully:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error loading tours:', error);
        throw error;
    }
};

export const loadUuDai = async () => {
    try {
        const res = await apiClient.get('/api-nguoidung/Uudai/get-by-uudai');
        console.log('Tour LoadTourUuDai successfully:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error loading discounts:', error);
        throw error;
    }
};


export const loadDiadiem = async () => {
    try {
        const res = await apiClient.get('/api-nguoidung/Diadiem/get-by-diadiem');
        return res.data;
    } catch (error) {
        console.error('Error loading locations:', error);
        throw error;
    }
};
export const loadTourdanhmuc = async (madanhmuctour ) => {
    try {
        const res = await apiClient.get(`/api/Tour/get-by-danhmucid/${madanhmuctour}`);
        return res.data;
    } catch (error) {
        console.error('Error loading locations:', error);
        throw error;
    }
};

export const searchTours = async (page_index, page_size, tieudetour, noikhoihanh) => {
    try {
        const res = await apiClient.post('/api-nguoidung/Tour/search', {
            page: page_index,
            pageSize: page_size,
            tieudetour: tieudetour,
            noikhoihanh: noikhoihanh
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'charset': 'utf-8'
            }
        });
        console.log('Tour added:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error searching tours:', error);
        throw error;
    }
};
export const searchPrice = async (Min, Max) => {
    try {
        const res = await apiClient.post('/api/Tour/Search-price', {
            MinPrice: Min,
            MaxPrice: Max,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'charset': 'utf-8'
            }
        });
        console.log('Tour :', res.data);
        return res.data;
    } catch (error) {
        console.error('Error searching tours:', error);
        throw error;
    }
};

import { apiClient } from '../constant/api';

const loadTourchitietID = async (matour) => {
    try {
        const response = await apiClient.get(`/api-nguoidung/TourDetail/get-by-iddetail/${matour}`);
        const tourdetail = response.data;
        localStorage.setItem('machitiettour', tourdetail.machitiettour);
        return tourdetail;
    } catch (error) {
        console.error('Error loading tour detail:', error);
        throw error;
    }
};
const loadTourID = async (matour) => {
    try {
        if (matour) {
            const response = await apiClient.get(`/api/Tour/get-by-id/${matour}`);
            return response.data;            
        } else {
            return null; 
        }
    } catch (error) {
        console.error('Error loading tour:', error);
        throw error;
    }
};
const loadLichtrinh = async () => {
    try {
        const machitiettour = localStorage.getItem('machitiettour');
        const response = await apiClient.get(`/api-nguoidung/Lichtrinh/get-by-id-lichtrinh/${machitiettour}`);
        const lichtrinh = response.data;
        return lichtrinh;
    } catch (error) {
        console.error('Error loading lichtrinh:', error);
        throw error;
    }
};
const loadgetALL = async () => {
    try {
        const response = await apiClient.get('/api/TourDetail/get-by-chitietall');
        return response.data;
    } catch (error) {
        console.error('Error loading tour:', error);
        throw error;
    }
};
const loadIDnull = async () => {
    try {
        const response = await apiClient.get('/api/TourDetail/get-by-IDnull');
        return response.data;
    } catch (error) {
        console.error('Error loading orders:', error);
        throw error;
    }
};
const loadIDDetail = async (machitiettour) => {
    try {
        const response = await apiClient.get(`/api/TourDetail/get-by-detail/${machitiettour}`);
        return response.data;
    } catch (error) {
        console.error('Error loading tour:', error);
        throw error;
    }
};
const addTourdetail = async (newTourdetail) => {
    try {
        const response = await apiClient.post('/api/TourDetail/create-tourdetail', newTourdetail);
        console.log('Tour added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding tour:', error);
        throw error;
    }
};

const deleteTourdetail = async (machitiettour) => {
    try {
        const response = await apiClient.delete(`/api/TourDetail/delete-tourdetail/${machitiettour}`);      
        return response.data;
    } catch (error) {
        console.error('Error deleting tour:', error);
        throw error;
    }
};

const updateTourdetail = async (updatedTourdetail) => {
    try {
        const response = await apiClient.post('/api/TourDetail/update-tourdetail', updatedTourdetail);
        console.log('Tour updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating tour:', error);
        throw error;
    }
};
export {
    loadIDDetail,
    loadIDnull,
    loadgetALL,
    addTourdetail,
    deleteTourdetail,
    updateTourdetail,
    loadTourchitietID,
    loadTourID,
    loadLichtrinh
};

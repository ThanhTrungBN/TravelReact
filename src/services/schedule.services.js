import { apiClient } from '../constant/api';


const LoadLichtrinh = async () => {
    try {
        const response = await apiClient.get('/api/Lichtrinh/get-by-all-lichtrinh');
        console.log('GET:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error loading tours:', error);
        throw error;
    }
};
const LoadLichtrinhid = async (lichtrinhid) => {
    try {
        const response = await apiClient.get(`/api/Lichtrinh/get-by-lichtrinhid/${lichtrinhid}`);
        console.log('GET:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error loading tours:', error);
        throw error;
    }
};

const addLichtrinh = async (lichtrinh) => {
    try {
        const response = await apiClient.post('/api/Lichtrinh/create-lichtrinh', lichtrinh);
        console.log('Tour added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding tour:', error);
        throw error;
    }
};

const deleteLichtrinh = async (lichtrinh) => {
    try {
        const response = await apiClient.delete(`/api/Lichtrinh/delete-lichtrinh/${lichtrinh}`);      
        return response.data;
    } catch (error) {
        console.error('Error deleting tour:', error);
        throw error;
    }
};

const updateLichtrinh = async (lichtrinh) => {
    try {
        const response = await apiClient.post('/api/Lichtrinh/update-lichtrinh', lichtrinh);
        console.log('Tour updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating tour:', error);
        throw error;
    }
};
export {
    LoadLichtrinhid,
    LoadLichtrinh,
    addLichtrinh,
    deleteLichtrinh,
    updateLichtrinh
}
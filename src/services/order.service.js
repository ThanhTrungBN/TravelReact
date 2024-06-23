import { apiClient } from '../constant/api';

const loadTourID = async (matour) => {
    try {
        if (matour) {
            const response = await apiClient.get(`/api-nguoidung/Tour/get-by-id/${matour}`);
            const tour = response.data;
            const price = {
                adult: { quantity: 1, price: tour.gia },
                children: { quantity: 0, price: tour.giatreem },
                smallchildren: { quantity: 0, price: tour.giatrenho },
                baby: { quantity: 0, price: tour.giaembe },
            }
            Object.keys(price).forEach((category) => {
                updateTotalPrice(price, category);
            });
            return { tour, price };
        }
        else {
            return null
        }
    } catch (error) {
        throw error;
    }
};
const bookingID = async(OrderID)=>{
    try {
        const res = await apiClient.get(`/api/Order/get-by-booking/${OrderID}`);
        return res.data;
    } catch (error) {
        console.error('Error loading bookingID:', error);
        throw error;
    }
}
const SaleID = async(matour)=>{
    try {
        const res = await apiClient.get(`/api/Uudai/get-by-sale/${matour}`);
        return res.data;
    } catch (error) {
        console.error('Error loading Sale:', error);
        throw error;
    }
}
const UpdatebookingID = async(OrderID)=>{
    try {
        const res = await apiClient.post(`/api/Order/update-order-trangthai/${OrderID}`);
        return res.data;
    } catch (error) {
        console.error('Error loading UpdatebookingID:', error);
        throw error;
    }
}

const updateTotalPrice = (price, category) => {
    price[category].total = price[category].quantity * price[category].price;
    console.log("Total price for " + category + ": " + price[category].total);
    calculateTotalPrice(price);
};

const calculateTotalPrice = (price) => {
    let totalSl = 0;
    let totalPrice = 0;
    Object.keys(price).forEach((category) => {
        totalPrice += price[category].total;
        totalSl += price[category].quantity;
    });
    console.log("Total price for all : " + totalPrice);
    console.log("Total price for all : " + totalSl);
    return { totalSl, totalPrice };
};


const addOrder = async (model, thongtin) => {
    try {
        const response = await apiClient.post('/api-nguoidung/Order/create-order', {
            model,
            thongtin
        });
        console.log('Order added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
const VnPay = async (model,thongtin,payment) => {
    try {
        const response = await apiClient.post('/api/VnPay/create-payment-url',model,thongtin,payment);
        console.log('Order added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
const loadOrder = async () => {
    try {
        const response = await apiClient.get('/api/Order/get-by-order');
        return response.data;
    } catch (error) {
        console.error('Error loading orders:', error);
        throw error;
    }
};
const DeleteOrder = async (OrderID) => {
    try {
        const response = await apiClient.delete(`/api/Order/delete-order/${OrderID}`);
        return response.data;
    } catch (error) {
        console.error('Error loading orders:', error);
        throw error;
    }
};
const loadOrderById = async () => {
    try {
        const mataikhoan = localStorage.getItem('mataikhoan');
        const response = await apiClient.get(`/api-nguoidung/Order/get-by-orderid/${mataikhoan}`);
        return response.data;
    } catch (error) {
        console.error('Error loading orders by ID:', error);
        throw error;
    }
};

const loadNguoidungbyID = async () => {
    try {
        const manguoidung = localStorage.getItem('manguoidung');
        const response = await apiClient.get(`/api-nguoidung/Nguoidung/get-user-id/${manguoidung}`);
        return response.data;
    } catch (error) {
        console.error('Error loading user by ID:', error);
        throw error;
    }
};
export {
    SaleID,
    UpdatebookingID,
    bookingID,
    VnPay,
    DeleteOrder,
    loadOrder,
    loadOrderById,
    loadNguoidungbyID,
    loadTourID,
    addOrder,
};

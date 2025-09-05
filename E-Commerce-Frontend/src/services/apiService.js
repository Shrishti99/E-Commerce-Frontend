import { API_ENDPOINTS } from '../config/api.config';

export const apiService = {
    async fetchProducts() {
        try {
            const response = await fetch(API_ENDPOINTS.GET_PRODUCTS);
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    async fetchProductById(id) {
        try {
            const response = await fetch(API_ENDPOINTS.GET_PRODUCT_BY_ID(id));
            return await response.json();
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
        
    }
    
    // Additional API methods can be added here
};
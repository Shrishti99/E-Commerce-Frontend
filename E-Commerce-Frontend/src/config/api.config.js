// Using relative URLs for proxy
const API_BASE_URL = '';

export const API_ENDPOINTS = {
    // Get all Products 
    GET_PRODUCTS: `/products`,
    // Get Products by ID
    GET_PRODUCT_BY_ID: (productId) => `${API_BASE_URL}/products/${productId}`,
    
    // Categories
    // GET_CATEGORIES: `${API_BASE_URL}/categories`,
    
    // Auth
    // LOGIN: `${API_BASE_URL}/auth/login`,
    // REGISTER: `${API_BASE_URL}/auth/register`,
    
    // Cart
    // GET_CART: `${API_BASE_URL}/cart`,
    // ADD_TO_CART: `${API_BASE_URL}/cart/add`
};

export default API_ENDPOINTS;
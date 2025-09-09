const API_BASE_URL = '/api';

export const API_ENDPOINTS = {
  GET_PRODUCTS: `${API_BASE_URL}/products`,
  GET_PRODUCT_BY_ID: (productId) => `${API_BASE_URL}/products/${productId}`,
};

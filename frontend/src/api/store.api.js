import axios from 'axios'

const productsApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// PRODUCTS 
export const getAllProducts = () => productsApi.get("/products/api/v1/products/");

export const getProduct = (id) => productsApi.get(`/products/api/v1/products/${id}/`);

export const createProduct = (product) => productsApi.post("/products/api/v1/products/", product);

export const deleteProduct = (id) => productsApi.delete(`/products/api/v1/products/${id}`);

export const updateProduct = (id, product) => productsApi.put(`/products/api/v1/products/${id}/`, product);

export const getAllCategoriesPt = () => productsApi.get("/products/api/v1/categorias/");
export const getAllStatesPt = () => productsApi.get("/products/api/v1/estados/");
export const getAllBrandsPt = () => productsApi.get("/products/api/v1/marcas/");

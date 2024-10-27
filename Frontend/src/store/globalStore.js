import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields" };
    }
    const data = await axios.post("api/products", newProduct);

    set((state) => ({ products: [...state.products, data.data.data] }));
    return { success: true, message: "Product created succcessfully" };
  },
  getProducts: async () => {
    const data = await axios.get("api/products");
    set({ products: data.data });
  },
  deleteProduct: async (pid) => {
    const res = await axios.delete(`api/products/${pid}`);
    const data = await res.data;

    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: data.message };
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await axios.put(`api/products/${pid}`, updatedProduct);
    const data = await res.data;
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));
    return { success: true, message: data.message };
  },
}));

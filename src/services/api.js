// const BASE_URL = "https://fakestoreapi.com";

// export const api = {
//   getProducts: async () => {
//     const response = await fetch(`${BASE_URL}/products`);
//     return response.json();
//   },

//   getCategories: async () => {
//     const response = await fetch(`${BASE_URL}/products/categories`);
//     return response.json();
//   },

//   getProductsByCategory: async (category) => {
//     const response = await fetch(`${BASE_URL}/products/category/${category}`);
//     return response.json();
//   },
// };
const BASE_URL = "https://fakestoreapi.com";

export const api = {
  getProducts: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    return response.json();
  },

  getCategories: async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    return response.json();
  },

  getProductsByCategory: async (category) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    return response.json();
  },
};

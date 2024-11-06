import { useState, useEffect } from "react";
import { api } from "../../services/api";
import ProductCard from "../product/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products when the component is mounted
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsData = await api.getProducts();
        setProducts(productsData); // Set fetched products to state
      } catch (err) {
        setError("Failed to load products.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Display loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Display error if any
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  // Display products list
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

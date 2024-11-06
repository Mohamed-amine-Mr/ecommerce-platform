import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { api } from "../../services/api";

const LatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    api.getProducts().then(setLatestProducts);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Latest Products</h2>
      <ProductList products={latestProducts.slice(0, 10)} />
    </div>
  );
};

export default LatestProducts;

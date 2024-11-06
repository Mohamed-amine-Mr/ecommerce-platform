import { useEffect, useState } from "react";
import ProductList from "../product/ProductList";
import { api } from "../../services/api";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    api
      .getProducts()
      .then((products) =>
        setFeaturedProducts(
          products.filter((product) => product.rating.rate > 4)
        )
      );
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <ProductList products={featuredProducts.slice(0, 8)} />
    </div>
  );
};

export default FeaturedProducts;

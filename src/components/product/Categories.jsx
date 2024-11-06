import { useEffect, useState } from "react";
import { api } from "../../services/api";

import electronicsImg from "../../assets/images/electronics.webp";
import jeweleryImg from "../../assets/images/jewelry.webp";
import mensClothingImg from "../../assets/images/mensClothing.webp";
import womensClothingImg from "../../assets/images/womenClothing.webp";

const categoryImages = {
  electronics: electronicsImg,
  jewelery: jeweleryImg,
  "men's clothing": mensClothingImg,
  "women's clothing": womensClothingImg,
};

const Categories = () => {
  const [categories, setCategories] = useState([]); // Set initial state to empty array

  useEffect(() => {
    api.getCategories().then((data) => {
      // Ensure data is available before setting state
      setCategories(data);
    });
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      {categories.length === 0 ? (
        <p>Loading categories...</p> // Show loading message if categories are empty
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category} className="relative group cursor-pointer h-64">
              <img
                src={categoryImages[category]}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold capitalize">
                  {category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;

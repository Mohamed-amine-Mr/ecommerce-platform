import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getCategories().then(setCategories);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category} className="relative group cursor-pointer h-64">
            <img
              src={`https://source.unsplash.com/random/400x400/?${category}`}
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
    </div>
  );
};

export default Categories;

<<<<<<< HEAD
// import { useEffect, useState } from "react";
// import { api } from "../../services/api";

// import electronicsImg from "../../assets/images/electronics.webp";
// import jeweleryImg from "../../assets/images/jewelry.webp";
// import mensClothingImg from "../../assets/images/mensClothing.webp";
// import womensClothingImg from "../../assets/images/womenClothing.webp";

// const categoryImages = {
//   electronics: electronicsImg,
//   jewelery: jeweleryImg,
//   "men's clothing": mensClothingImg,
//   "women's clothing": womensClothingImg,
// };

// const Categories = () => {
//   const [categories, setCategories] = useState([]); // Set initial state to empty array

//   useEffect(() => {
//     api.getCategories().then((data) => {
//       // Ensure data is available before setting state
//       setCategories(data);
//     });
//   }, []);

//   return (
//     <div className="container mx-auto py-16 px-4">
//       <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
//       {categories.length === 0 ? (
//         <p>Loading categories...</p> // Show loading message if categories are empty
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {categories.map((category) => (
//             <div key={category} className="relative group cursor-pointer h-64">
//               <img
//                 src={categoryImages[category]}
//                 alt={category}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                 <h3 className="text-white text-xl font-semibold capitalize">
//                   {category}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;
=======
>>>>>>> 48193fd (adding context API)
import { useState, useEffect } from "react";

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    // Mock API fetch function (replace with actual API fetch if needed)
    const fetchCategories = () => {
      // Simulating categories fetched from an API
=======
    const fetchCategories = () => {
>>>>>>> 48193fd (adding context API)
      return ["electronics", "jewelery", "men's clothing", "women's clothing"];
    };

    setCategories(fetchCategories());
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center tracking-tight">
        Shop by Category
      </h2>
      {categories.length === 0 ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#f6ad55]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category}
              className="relative group cursor-pointer h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-700 ease-out hover:scale-105"
            >
              {/* Background Image with Scale Effect on Hover */}
              <img
                src={categoryImages[category]}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay with Dynamic Transition */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl font-semibold capitalize">
                  {category}
                </h3>
              </div>

              {/* Bottom Gradient Fade Effect */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;

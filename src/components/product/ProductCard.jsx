import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {product.title}
        </h3>
        <div className="flex justify-between items-center text-gray-500 mb-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center text-yellow-500">
            <span className="text-sm">★</span>
            <span className="ml-1 text-sm">{product.rating.rate}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full py-2 bg-gray-900 text-white font-semibold text-lg rounded-lg shadow-md transform transition-all duration-300 hover:bg-gray-200  hover:text-black 3 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

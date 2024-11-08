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
        <div className="flex justify-between items-center text-gray-600">
          <span className="text-xl font-bold text-[#f6ad55]">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center text-yellow-400">
            <span className="text-sm">★</span>
            <span className="ml-1 text-sm">{product.rating.rate}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

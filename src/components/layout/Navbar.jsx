import logo from "../../assets/images/logo.jpg";

import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white w-full z-50 fixed top-0 shadow-md border-b border-gray-200"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 rounded-full shadow-md"
              />
              <span className="text-2xl font-semibold text-gray-800 hover:text-[#f6ad55] transition duration-300">
                MERSH
              </span>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex flex-1 max-w-lg mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
              />
              <button className="absolute right-3 top-3">
                <Search className="h-5 w-5 text-gray-400 hover:text-[#f6ad55] transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {["Categories", "Deals"].map((link, idx) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-gray-600 font-medium hover:text-[#f6ad55] transition-colors duration-300"
                >
                  {link}
                </Link>
              </motion.div>
            ))}

            {/* User Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-[#f6ad55] transition-colors duration-300"
            >
              <User className="h-6 w-6" />
            </motion.button>

            {/* Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-[#f6ad55] transition-colors duration-300 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#f6ad55] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                0
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

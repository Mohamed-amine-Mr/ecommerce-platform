import { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleSignUp = () => {
    setIsSignUpOpen((prev) => !prev);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <motion.nav
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white w-full z-50 fixed top-0 shadow-md border-b border-gray-200"
    >
      <div className="container mx-auto">
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
                SHUKR
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

            {/* User Icon with Sign-Up Window */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSignUp}
              className="text-gray-600 hover:text-[#f6ad55] transition-colors duration-300 relative"
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

      {/* Sign-Up Modal */}
      <AnimatePresence>
        {isSignUpOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
              onClick={closeSignUp}
            />

            {/* Sign-Up Modal */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className="relative z-50 bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Sign Up
                </h2>
                <button onClick={closeSignUp}>
                  <X className="h-6 w-6 text-gray-600 hover:text-red-600 transition" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6ad55]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6ad55]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6ad55]"
              />
              <button className="w-full py-2 bg-[#f6ad55] text-white rounded-lg font-semibold hover:bg-[#e76b00] transition-colors">
                Register
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#f6ad55] font-medium hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

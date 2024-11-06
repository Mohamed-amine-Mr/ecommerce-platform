import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold">
            DEV SHOP
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              Cart
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

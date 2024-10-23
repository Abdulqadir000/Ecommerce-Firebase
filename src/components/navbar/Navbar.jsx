import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaUserShield,
  FaSignOutAlt,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  const cartItems = useSelector((state) => state.cart);

  const navList = (
    <ul className="hidden lg:flex space-x-6 text-gray-800 font-bold text-lg px-8">
      {/* Home */}
      <li>
        <Link
          to={"/"}
          className="hover:text-blue-500 transition-colors duration-200 ease-in-out"
        >
          Home
        </Link>
      </li>
      {/* All Products */}
      <li>
        <Link
          to={"/allproduct"}
          className="hover:text-blue-500 transition-colors duration-200 ease-in-out"
        >
          All Products
        </Link>
      </li>
    </ul>
  );

  const rightNav = (
    <ul className="flex text-gray-800 font-bold px-8 space-x-3">
      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"} className="flex items-center">
            <FaUserShield className="mr-2 text-xl" />
          </Link>
        </li>
      )}
      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"} className="flex items-center">
            <ShoppingBag className="mr-2 text-xl" />
          </Link>
        </li>
      )}
      {/* Signup */}
      {!user && (
        <li>
          <Link to={"/signup"} className="flex items-center">
            <FaUserPlus className="mr-2 text-xl" />
          </Link>
        </li>
      )}
      {/* Login */}
      {!user && (
        <li>
          <Link to={"/login"} className="flex items-center">
            <FaSignInAlt className="mr-2 text-xl" />
          </Link>
        </li>
      )}
      {/* Logout */}
      {user && (
        <li className="cursor-pointer flex items-center" onClick={logout}>
          <FaSignOutAlt className="mr-2 text-xl" />
        </li>
      )}
      {/* Cart */}
      <li>
        <Link to={"/cart"} className="flex items-center">
          <Badge badgeContent={cartItems.length} color="error">
            <FaShoppingCart className="text-xl" />
          </Badge>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gray-100 shadow-lg top-0">
      <div className="flex justify-between items-center py-4 px-4 lg:px-8">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link to={"/"}>
            <h2 className="font-bold text-black text-2xl whitespace-nowrap">E-Qadir</h2>
          </Link>
        </div>
        {/* Center (Nav Links) */}
        <div className="hidden lg:flex">
          {navList}
        </div>
        {/* Right (Icons for Mobile and Desktop) */}
        <div className="flex ml-20 items-center space-x-2">
          {rightNav}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


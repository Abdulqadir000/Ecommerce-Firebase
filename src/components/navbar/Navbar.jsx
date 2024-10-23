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
    <ul className="flex space-x-6 text-gray-800 font-bold text-lg px-8">
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
    <ul className="flex space-x-6 text-gray-800 font-bold px-8">
      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"} className="flex items-center">
            <FaUserShield className="mr-2 text-xl" /> {/* No hover on icon */}
          </Link>
        </li>
      )}
      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"} className="flex items-center">
            <ShoppingBag  className="mr-2 text-xl" /> {/* No hover on icon */}
          </Link>
        </li>
      )}
      {/* Signup */}
      {!user && (
        <li>
          <Link to={"/signup"} className="flex items-center">
            <FaUserPlus className="mr-2 text-xl" /> {/* No hover on icon */}
          </Link>
        </li>
      )}
      {/* Login */}
      {!user && (
        <li>
          <Link to={"/login"} className="flex items-center">
            <FaSignInAlt className="mr-2 text-xl" /> {/* No hover on icon */}
          </Link>
        </li>
      )}
      {/* Logout */}
      {user && (
        <li className="cursor-pointer flex items-center" onClick={logout}>
          <FaSignOutAlt className="mr-2 text-xl" /> {/* No hover on icon */}
        </li>
      )}
      {/* Cart */}
      <li>
        <Link to={"/cart"} className="flex items-center">
          <Badge badgeContent={cartItems.length} color="error"  >
            <FaShoppingCart className="text-xl" /> {/* No hover on icon */}
          </Badge>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gray-50 top-0">
      <div className="lg:flex lg:justify-between items-center py-6 lg:px-8">
        {/* Left */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-black text-3xl text-center">
              E-Qadir
            </h2>  
          </Link>
        </div>
        {/* Center (Nav Links) */}
        <div className="right flex justify-center mb-4 lg:mb-0">
          {navList}
        </div>
        {/* Right (Admin, Logout, Cart) */}
        <div className="right-nav flex justify-end">
          {rightNav}
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;



// import { Link, useNavigate } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   // get user from localStorage
//   const user = JSON.parse(localStorage.getItem("users"));

//   // navigate
//   const navigate = useNavigate();

//   // logout function
//   const logout = () => {
//     localStorage.clear("users");
//     navigate("/login");
//   };

//   // CartItems
//   const cartItems = useSelector((state) => state.cart);

//   // navList Data
//   const navList = (
//     <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
//       {/* Home */}
//       <li>
//         <Link to={"/"}>Home</Link>
//       </li>

//       {/* All Product */}
//       <li>
//         <Link to={"/allproduct"}>All Product</Link>
//       </li>

//       {/* Signup */}
//       {!user ? (
//         <li>
//           <Link to={"/signup"}>Signup</Link>
//         </li>
//       ) : (
//         ""
//       )}

//       {/* Signup */}
//       {!user ? (
//         <li>
//           <Link to={"/login"}>Login</Link>
//         </li>
//       ) : (
//         ""
//       )}

//       {/* User */}
//       {user?.role === "user" && (
//         <li>
//           <Link to={"/user-dashboard"}>User</Link>
//         </li>
//       )}

//       {/* Admin */}
//       {user?.role === "admin" && (
//         <li>
//           <Link to={"/admin-dashboard"}>Admin</Link>
//         </li>
//       )}

//       {/* logout */}
//       {user && (
//         <li className=" cursor-pointer" onClick={logout}>
//           logout
//         </li>
//       )}

//       {/* Cart */}
//       <li>
//         <Link to={"/cart"}>Cart({cartItems.length})</Link>
//       </li>
//     </ul>
//   );
//   return (
//     <nav className="bg-pink-600 sticky top-0">
//       {/* main  */}
//       <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//         {/* left  */}
//         <div className="left py-3 lg:py-0">
//           <Link to={"/"}>
//             <h2 className=" font-bold text-white text-2xl text-center">
//               E-Bharat
//             </h2>
//           </Link>
//         </div>

//         {/* right  */}
//         <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

//         {/* Search Bar  */}
//         <SearchBar />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

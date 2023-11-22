import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setBtnname] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-teal-500 shadow-lg p-4 md:p-6">
      <div className="logo-container">
        <img className="w-32 md:w-48" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 md:space-x-6 items-center text-white">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300 text-xl font-bold">
              Cart: {cartItems?.length} (Items)
            </Link>
          </li>
          <button
            className="login-btn bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out hover:bg-blue-600"
            onClick={() => {
              setBtnname((prev) => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

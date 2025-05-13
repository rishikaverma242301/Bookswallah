import React from "react";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="font-tag">
      {/* Top Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-4 py-3 border-b gap-4 md:gap-0">
        {/* Logo and Search */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <img
            src="/Images/Header/Design2.jpg"
            alt="Logo"
            className="w-20 h-auto"
          />
          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by Title, Author, Publisher or ISBN"
              className="flex-1 px-4 py-2 border w-full sm:w-96 focus:outline-none"
            />
            <button className="bg-red-600 text-white px-4 py-2">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Account Icons */}
        <div className="flex items-center justify-center space-x-4 text-red-600 text-xl mt-2 md:mt-0">
          <FaUserCircle title="My Account" />
          <h4 className="text-black text-sm sm:text-base md:text-xl">
            My Account
          </h4>
          <FaShoppingCart title="Cart" />
          <FaHeart title="Wishlist" />
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="font-myFont border-b overflow-x-auto">
        <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-6 px-4 py-3 text-sm whitespace-nowrap">
          <li><a href="#" className="cursor-pointer hover:underline">Books</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">New Arrivals</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">Box Sets</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">Bestsellers</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">Fiction Books</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">Award Winners</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">Featured Authors</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">Today's Deal</a></li>
          <li><a href="#" className="cursor-pointer hover:underline">Request a Book</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

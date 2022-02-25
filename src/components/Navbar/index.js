import React from "react";
import logo from "../../shopee.png";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { count } = useGlobalContext();
  return (
    <div className="p-6 flex justify-between items-center gap-5">
      <div className="text-white w-56">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="w-full flex sm:visible invisible justify-center items-center">
        <input
          type="text"
          className="p-2 w-2/4 rounded-md"
          placeholder="Search..."
        />
        <span className="flex rounded-md justify-center bg-red-300 items-center py-2.5 px-3.5">
          <BsSearch className="text-green-700" />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <BsCart4 className="sm:w-10 sm:h-10 w-8 h-8 text-blue-400" />
        <span className="count absolute sm:top-11 top-5 -right-0.5  font-semibold sm:right-0.5 bg-white rounded-full sm:py-1.5 sm:px-3 py-1 px-2.5">
          {count}
        </span>
      </div>
    </div>
  );
};

export default Navbar;

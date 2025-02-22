import React from "react";
import { IoIosRainy, IoIosSunny } from "react-icons/io";
import { FaRegSnowflake } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="h-18 bg-gray-500 font-bold flex items-center justify-evenly font-mono text-4xl">
        <IoIosSunny className="text-amber-300"/> <IoIosRainy className="text-blue-300" />{" "}
        <span className="text-red-500">Weather App</span>
        <FaRegMoon className="text-blue-50"/> <FaRegSnowflake  className="text-blue-50"/>
      </div>
    </>
  );
};

export default Header;

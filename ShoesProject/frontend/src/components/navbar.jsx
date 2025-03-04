import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaChevronDown } from "react-icons/fa";
import axios from "../config/api"; // Ensure axios instance is configured
import defaultUserImg from "../assets/pp.png"; // Default profile picture
import { toast } from "react-hot-toast";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/user/check");
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/user/logout");
      setUser(null);
      setDropdownOpen(false); // Auto-collapse dropdown
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ShoeStore</Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 uppercase text-sm">
          <li><Link to="/new" className="hover:text-gray-400">New</Link></li>
          <li><Link to="/men" className="hover:text-gray-400">Men</Link></li>
          <li><Link to="/women" className="hover:text-gray-400">Women</Link></li>
          <li><Link to="/sale" className="hover:text-gray-400">Sale</Link></li>
          <li><Link to="/kids" className="hover:text-gray-400">Kids</Link></li>
          <li><Link to="/updateProfile" className="hover:text-gray-400">Update</Link></li>
        </ul>

        {/* Search & User Dropdown */}
        <div className="flex gap-4 relative">
          <FaSearch className="text-xl cursor-pointer hover:text-gray-400" />

          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user ? (
                <img
                  src={user.profilePic || defaultUserImg}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full border border-gray-500"
                />
              ) : (
                <FaUser className="text-xl cursor-pointer hover:text-gray-400" />
              )}
              <FaChevronDown className="ml-2 text-sm" />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                <ul>
                  <li className="p-2 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>
                    {user ? user.fullName : <Link to="/login">Login / Signup</Link>}
                  </li>
                  {user && (
                    <>
                      <li className="p-2 hover:bg-gray-200">
                        <Link to="/account" onClick={() => setDropdownOpen(false)}>My Account</Link>
                      </li>
                      <li className="p-2 hover:bg-gray-200">
                        <Link to="/updateProfile" onClick={() => setDropdownOpen(false)}>Profile Update</Link>
                      </li>
                      <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

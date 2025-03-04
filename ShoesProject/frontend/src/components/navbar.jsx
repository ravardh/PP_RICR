import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ShoeStore</Link>
        <ul className="hidden md:flex gap-6 uppercase text-sm">
          <li><Link to="/new" className="hover:text-gray-400">New</Link></li>
          <li><Link to="/men" className="hover:text-gray-400">Men</Link></li>
          <li><Link to="/women" className="hover:text-gray-400">Women</Link></li>
          <li><Link to="/sale" className="hover:text-gray-400">Sale</Link></li>
          <li><Link to="/kids" className="hover:text-gray-400">Kids</Link></li>
        </ul>
        <div className="flex gap-4">
          <FaSearch className="text-xl cursor-pointer hover:text-gray-400" />
          <Link to="/login"><FaUser className="text-xl cursor-pointer hover:text-gray-400" /></Link>
        </div>
      </div>
    </nav>
  );
}

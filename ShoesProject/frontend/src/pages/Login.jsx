import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform hover:scale-105 transition-transform"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Welcome Back</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gray-900 text-white w-full p-3 rounded-lg font-semibold tracking-wide hover:bg-gray-800 transition-all"
          >
            Login
          </motion.button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don't have an account? {" "}
          <Link to="/signup" className="text-blue-500 font-semibold hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}
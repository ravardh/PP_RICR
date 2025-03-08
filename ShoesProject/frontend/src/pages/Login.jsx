import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "../config/api";
import showToast from "../components/toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/login", { email, password });

      // Fetch user profile (token is included automatically from cookies)
      const response = await axios.get("/api/user/check");
      const profile = response.data; // Correct way to access data

      // Save user info in sessionStorage instead of localStorage
      sessionStorage.setItem("user", JSON.stringify(profile));

      // Show success message
      showToast.success(data.message);

      // Navigate and delay reload to let toast appear
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 1500); // Delay to let toast show
    } catch (error) {
      showToast.error("Login Denied! Invalid Credentials.");

      if (error.response) {
        console.error("Error Status:", error.response.status);
        console.error("Error Response:", error.response.data);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-200 p-4">
      <motion.div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-900 text-white w-full p-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
